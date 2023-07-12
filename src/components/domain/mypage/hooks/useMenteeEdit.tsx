import { PATH, SessionStorage } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import { menTeeInfoApi, menteeEditApi } from "@/utils/api/mypage";
import { hasKey } from "@/utils/form";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

type EditForm = {
  nickname: string;
  interestPlatforms: string[];
};

const INITIAL_STATE = {
  nickname: "",
  interestPlatforms: [],
};

export default function useMenteeEdit() {
  const [form, setForm] = useImmer<EditForm>(INITIAL_STATE);
  const [isModified, setIsModified] = useState(false);
  const { nickname, interestPlatforms } = form;
  const router = useRouter();
  const { user, onSetUserInfo } = useAuthContext();
  const isDisabledSubmit = !(nickname && interestPlatforms && isModified);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await menTeeInfoApi();
      setForm(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isModified) setIsModified(true);
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "interestPlatforms") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isModified) setIsModified(true);
    const { value, checked } = e.target;

    const checkedList = checked
      ? [...form.interestPlatforms, value]
      : form.interestPlatforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.interestPlatforms = checkedList;
    });
  };

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const body = {
        nickname,
        interestPlatforms,
      };
      const editResponse = await menteeEditApi(body);

      if (editResponse.status === 200) {
        onSetUserInfo({ nickname });
        router.push(PATH.ROOT);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isDisabledSubmit,
    form,
    handleChangeInput,
    handleChangePlatform,
    handleSubmit,
  };
}
