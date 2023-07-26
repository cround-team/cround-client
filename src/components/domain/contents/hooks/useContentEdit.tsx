import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import { contentDetailApi, contentEditApi } from "@/utils/api";
import { hasKey } from "@/utils/form";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";

type UseContentEditProps = {
  id: number;
};

const INITIAL_STATE = {
  platformType: "",
  title: "",
  content: "",
};

export default function useContentEdit({ id }: UseContentEditProps) {
  const [form, setForm] = useImmer(INITIAL_STATE);
  const [isModified, setIsModified] = useState(false);
  const { platformType, title, content } = form;
  const router = useRouter();
  const isDisabledSubmit = !(platformType && title && content && isModified);

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    try {
      const response = await contentDetailApi(id);
      setForm((draft) => {
        draft.platformType = response.data.platformType;
        draft.title = response.data.title;
        draft.content = response.data.content;
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
    } else if (name !== "platformType") {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const body = {
        boardId: id,
        platformType,
        title,
        content,
      };
      const res = await contentEditApi(body);

      if (res.status === 200) {
        router.push(`${PATH.CONTENTS.DETAIL}/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isDisabledSubmit,
    form,
    handleChangeForm,
    handleChangePlatform,
    handleSubmit,
  };
}
