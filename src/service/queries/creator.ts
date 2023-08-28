import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { omit } from "lodash-es";
import { SessionStorage } from "@/constants";

import type { CreatorListParams, CreatorRegisterBody } from "@/types/creator";
import { creatorCreateApi, creatorsCustomApi } from "@/utils/api";
import { useAuthContext } from "@/context/AuthContext";

export const creatorKeys = {
  all: ["creator"] as const,
  lists: () => [...creatorKeys.all, "list"] as const,
  list: (filters: CreatorListParams) =>
    [...creatorKeys.lists(), { filters }] as const,
  recommends: () => [...creatorKeys.all, "list"] as const,
  recommend: (filters: CreatorListParams) =>
    [...creatorKeys.lists(), { filters }] as const,
  details: () => [...creatorKeys.all, "detail"] as const,
  detail: (id: string) => [...creatorKeys.details(), id] as const,
};

export const useFetchCustomCreatorList = (filters?: CreatorListParams) => {
  const filter = { ...filters, size: 12 };

  return useQuery(creatorKeys.list(filter), () => creatorsCustomApi(filter));
};

export const useRegisterCreator = () => {
  const queryClient = useQueryClient();
  const { onSetUserInfo } = useAuthContext();

  return useMutation(
    (req: CreatorRegisterBody) => {
      const formData = new FormData();

      if (req.profileImage) {
        formData.append("profileImage", req.profileImage);
      }
      const withoutImageRequest = omit(req, "profileImage");

      formData.append(
        "creatorSaveRequest",
        new Blob([JSON.stringify(withoutImageRequest)], {
          type: "application/json",
        })
      );

      return creatorCreateApi(formData);
    },
    {
      onSuccess: (res, req) => {
        queryClient.invalidateQueries(creatorKeys.lists());
        queryClient.invalidateQueries(creatorKeys.recommends());

        SessionStorage.setItem("roleName", "creator");
        SessionStorage.setItem("nickname", req.nickname);
        SessionStorage.setItem("profileImage", res.profileImage);
        SessionStorage.setItem("creatorId", String(res.creatorId));

        const userInfo = {
          nickname: req.nickname,
          roleName: "creator",
          profileImage: res.profileImage,
          creatorId: res.creatorId,
        };
        onSetUserInfo(userInfo);
      },
    }
  );
};
