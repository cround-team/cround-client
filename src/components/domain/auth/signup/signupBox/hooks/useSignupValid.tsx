import { useState } from "react";
import { useImmer } from "use-immer";

import type {
  SignupForm,
  SignupMessage,
  SignupStep,
  SignupValid,
} from "@/types";
import { VALID_MSG } from "@/constants/validMsg";
import { emailDupCheckApi, nicknameDupCheckApi } from "@/utils/api";
import {
  emailValidCheck,
  nameValidCheck,
  nicknameCheck,
  passwordValidCheck,
} from "@/utils/validation";

const INITIAL_VALID: SignupValid = {
  name: true,
  email: true,
  password: true,
  confirmPassword: true,
  nickname: true,
};

const INITIAL_MSG: SignupMessage = {
  name: VALID_MSG.NAME_TIP,
  email: "",
  password: VALID_MSG.PSW_TIP,
  confirmPassword: VALID_MSG.PSW_TIP,
  nickname: VALID_MSG.NICKNAME_TIP,
};

export default function useSignupValid(form: SignupForm) {
  const [step, setStep] = useState<SignupStep>("base");
  const [valid, setValid] = useImmer<SignupValid>(INITIAL_VALID);
  const [message, setMessage] = useImmer<SignupMessage>(INITIAL_MSG);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { name, email, password, confirmPassword, nickname } = form;

  // 회원가입 Base Step
  const validCheckBase = () => {
    // 이름
    if (name) {
      const isTrue = nameValidCheck(name);
      const errorMessage = isTrue ? VALID_MSG.NAME_TIP : VALID_MSG.NAME;
      setValid((draft) => {
        draft.name = isTrue;
      });
      setMessage((draft) => {
        draft.name = errorMessage;
      });

      if (!isTrue) return false;
    }

    // 이메일
    if (email) {
      const isTrue = emailValidCheck(email);
      const errorMessage = isTrue ? "" : VALID_MSG.EMAIL;
      setValid((draft) => {
        draft.email = isTrue;
      });
      setMessage((draft) => {
        draft.email = errorMessage;
      });

      if (!isTrue) return false;
    }

    if (password) {
      const isTrue = passwordValidCheck(password);
      const errorMessage = isTrue ? VALID_MSG.PSW_TIP : VALID_MSG.PSW;
      setValid((draft) => {
        draft.password = isTrue;
      });
      setMessage((draft) => {
        draft.password = errorMessage;
      });

      if (!isTrue) return false;
    }

    if (confirmPassword) {
      const isTrue = password === confirmPassword;
      const errorMessage = isTrue ? VALID_MSG.PSW_TIP : VALID_MSG.PSW_MISMATCH;
      setValid((draft) => {
        draft.confirmPassword = isTrue;
      });
      setMessage((draft) => {
        draft.confirmPassword = errorMessage;
      });

      if (!isTrue) return false;
    }

    return true;
  };

  // 회원가입 Nickname Step
  const validCheckNickname = () => {
    if (nickname) {
      const isTrue = nicknameCheck(nickname);
      const errorMessage = isTrue ? VALID_MSG.NICKNAME_TIP : VALID_MSG.NICKNAME;
      setValid((draft) => {
        draft.nickname = isTrue;
      });
      setMessage((draft) => {
        draft.nickname = errorMessage;
      });

      if (!isTrue) return false;
    }

    return true;
  };

  const emailDupCheck = async () => {
    try {
      const body = { email };
      const response = await emailDupCheckApi(body);
      if (response.status === 200) {
        setValid((draft) => {
          draft.email = true;
        });
        setMessage((draft) => {
          draft.email = "";
        });
        setStep("nickname");
        setIsOpenModal(true);
      }
    } catch (error: any) {
      if ([400, 404].includes(error.response.status)) {
        setValid((draft) => {
          draft.email = false;
        });
        setMessage((draft) => {
          draft.email = error.response.data.message;
        });
      }
    }
  };

  const nicknameDupCheck = async () => {
    try {
      const body = { nickname };
      const response = await nicknameDupCheckApi(body);
      if (response.status === 200) {
        setValid((draft) => {
          draft.nickname = true;
        });
        setMessage((draft) => {
          draft.nickname = VALID_MSG.NICKNAME_TIP;
        });
        setStep("platform");
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setValid((draft) => {
          draft.nickname = false;
        });
        setMessage((draft) => {
          draft.nickname = error.response.data.message;
        });
      }
    }
  };

  const handleGoSuccessStep = () => setStep("success");
  const handleGoNicknameStep = () => setStep("nickname");

  return {
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
  };
}
