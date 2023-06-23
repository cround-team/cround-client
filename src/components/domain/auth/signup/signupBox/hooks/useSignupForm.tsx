import React from "react";
import { useImmer } from "use-immer";

import type { SignupForm } from "@/types";
import { hasKey } from "@/utils/form";
import useSignupValid from "./useSignupValid";
import { signupApi } from "@/utils/api";

const INITIAL_FORM: SignupForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  nickname: "",
  platforms: [],
};

export default function useSignupForm() {
  const [form, setForm] = useImmer<SignupForm>(INITIAL_FORM);
  const { name, email, password, confirmPassword, nickname, platforms } = form;
  const {
    isOpenModal,
    step,
    valid,
    message,
    validCheckBase,
    validCheckNickname,
    emailDupCheck,
    nicknameDupCheck,
    handleGoSuccessStep,
    handleGoNicknameStep,
  } = useSignupValid(form);

  const isDisabledBase = !(name && email && password && confirmPassword);
  const isDisabledNickname = !nickname;
  const isDisabledPlatform = !platforms.length;

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validCheckBase();
    isValid && emailDupCheck();
  };

  const handleSubmitNickname = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validCheckNickname();
    isValid && nicknameDupCheck();
  };

  const handleSubmitPlatform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        username: name,
        nickname,
        email,
        password,
        confirmPassword,
        interestPlatform: platforms,
      };

      const response = await signupApi(body);
      response?.status === 201 && handleGoSuccessStep();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) throw new Error("is not valid name");
    else if (name !== "platforms") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const checkedList = checked
      ? [...form.platforms, value]
      : form.platforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.platforms = checkedList;
    });
  };

  const getBaseStepProps = ({ ...otherProps } = {}) => ({
    form,
    valid,
    message,
    isDisabledSubmit: isDisabledBase,
    handleChangeInput,
    handleSubmit: handleSubmitBase,
    ...otherProps,
  });

  const getNicknameStepProps = ({ ...otherProps } = {}) => ({
    name,
    nickname,
    valid,
    message,
    isDisabledSubmit: isDisabledNickname,
    handleChangeInput,
    handleSubmit: handleSubmitNickname,
    ...otherProps,
  });

  const getPlatformStepProps = ({ ...otherProps } = {}) => ({
    name,
    isDisabledSubmit: isDisabledPlatform,
    handlePrevStep: handleGoNicknameStep,
    handleChange: handleChangePlatform,
    handleSubmit: handleSubmitPlatform,
    ...otherProps,
  });

  const getSuccessStepProps = ({ ...otherProps } = {}) => ({
    handleRefresh: () => history.go(0),
    ...otherProps,
  });

  return {
    isOpenModal,
    step,
    getBaseStepProps,
    getNicknameStepProps,
    getPlatformStepProps,
    getSuccessStepProps,
  };
}
