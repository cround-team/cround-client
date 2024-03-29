import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { useRouter } from "next/navigation";

import { shortDetailApi, shortEditApi } from "@/utils/api";
import { hasKey } from "@/utils/form";
import { PATH } from "@/constants";
import { useUploadImage } from "@/hooks";
import { conversionEnPlatform } from "@/utils/conversion";

type UseShortEditProps = {
  id: number;
};

type EditForm = {
  platformType: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  thumbnail?: File | null;
};

const INITIAL_STATE = {
  platformType: "",
  title: "",
  content: "",
  thumbnailUrl: "",
  thumbnail: null,
};

export default function useShortEdit({ id }: UseShortEditProps) {
  const [form, setForm] = useImmer<EditForm>(INITIAL_STATE);
  const [isModified, setIsModified] = useState(false);
  const { platformType, title, content, thumbnailUrl, thumbnail } = form;
  const router = useRouter();
  const isDisabledSubmit = !(platformType && title && content && isModified);

  const {
    isLoading: isImageLoading,
    selectedImage,
    previewImage,
    fileInputRef,
    handleFileChange,
    handleResetImage,
  } = useUploadImage();

  useEffect(() => {
    fetchDetailData();
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      setForm((draft) => {
        draft.thumbnail = selectedImage;
      });
    }

    if (previewImage !== null) {
      setForm((draft) => {
        draft.thumbnailUrl = previewImage;
      });
    }
  }, [selectedImage, previewImage]);

  const fetchDetailData = async () => {
    try {
      const response = await shortDetailApi(id);

      setForm((draft) => {
        draft.platformType = conversionEnPlatform(
          response.data.platformType
        ) as string;
        draft.title = response.data.title;
        draft.content = response.data.content;
        draft.thumbnailUrl = response.data.thumbnailUrl;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!isModified) setIsModified(true);
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "platformType" && name !== "thumbnail") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isModified) setIsModified(true);
    const { value, checked } = e.target;

    checked &&
      setForm((draft) => {
        draft.platformType = value;
      });
  };

  const handleChangeImage = () => {
    if (!isModified) setIsModified(true);
    handleResetImage();
    setForm((draft) => {
      draft.thumbnail = null;
      draft.thumbnailUrl = "";
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (thumbnail) {
        formData.append("thumbnailImage", thumbnail);
      }
      const shortFormUpdateRequest = {
        title,
        content,
        platformType,
      };

      formData.append(
        "shortFormUpdateRequest",
        new Blob([JSON.stringify(shortFormUpdateRequest)], {
          type: "application/json",
        })
      );
      const res = await shortEditApi(id, formData);
      if (res.status === 200) {
        router.push(`${PATH.SHORTS.DETAIL}/${id}`);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return {
    isDisabledSubmit,
    isImageLoading,
    form,
    fileInputRef,
    handleChangeForm,
    handleChangePlatform,
    handleFileChange,
    handleChangeImage,
    handleSubmit,
  };
}
