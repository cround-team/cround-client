import { PATH } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import { menteeEditApi } from "@/utils/api/mypage";
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
  const { onSetUserInfo } = useAuthContext();
  const isDisabledSubmit = !(nickname && interestPlatforms && isModified);

  useEffect(() => {
    testData();
  }, []);

  const testData = async () => {
    const response = {
      nickname: "코코",
      interestPlatforms: ["youtube", "spoon"],
    };
    setForm(response);
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
        username: nickname,
        interestPlatforms,
      };
      console.log(body);
      //   const res = await menteeEditApi(body);

      //   if (res.status === 200) {
      //     console.log("200", res);
      // const userInfo = {
      //   name: nickname,
      //   type: "member",
      //   profileImage: "",
      //   connectType: "",
      //   creatorId: 0,
      // };
      // onSetUserInfo(userInfo);
      //     router.push(PATH.ROOT);
      //   }
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
