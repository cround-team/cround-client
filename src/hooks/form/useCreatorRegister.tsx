import { creatorNicknameCheckApi } from "@/utils/api/creator";
import { hasKey } from "@/utils/form";
import React, { useState } from "react";
import { useImmer } from "use-immer";

// type InputMessageType =
//   | "한글, 영어, 또는 숫자로 2글자 이상 6글자 이내"
//   | "사용 가능한 닉네임입니다"
//   | "중복된 이메일입니다.";

type Inputs = {
  nickname: string;
  desc: string;
};

export default function useCreatorRegister() {
  const [inputValues, setInputValues] = useImmer<Inputs>({
    nickname: "",
    desc: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [validMessage, setValidMessage] = useState(
    "한글, 영어, 또는 숫자로 2글자 이상 6글자 이내"
  );
  const isDisabled = !!(inputValues.nickname && inputValues.desc);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    if (!hasKey(inputValues, name)) {
      throw new Error("is not valid name");
    }
    setInputValues((draft) => {
      draft[name] = value;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        nickname: inputValues.nickname,
      };
      const res = await creatorNicknameCheckApi(body);
      if (res.status === 200) {
        console.log(res);
      }
      console.log("res", res);
    } catch (error: any) {
      console.log(error);
    }
  };

  return {
    inputValues,
    errorMessage,
    isDisabled,
    validMessage,

    handleChangeForm,
    handleSubmit,
  };
}
