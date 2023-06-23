import { useRouter } from "next/navigation";
import { useState } from "react";
import { useImmer } from "use-immer";

import { PATH, LocalStorage, SessionStorage, VALID_MSG } from "@/constants";
import { hasKey } from "@/utils/form";
import { loginApi } from "@/utils/api";
import { emailValidCheck } from "@/utils/validation";
import { useAuthContext } from "@/context/AuthContext";
import { conversionUserType } from "@/utils/conversion";

type LoginForm = {
  email: string;
  password: string;
};

type VALID = {
  email: boolean;
  password: boolean;
};

const INITIAL_FORM: LoginForm = {
  email: "",
  password: "",
};

const INITIAL_VALID: VALID = {
  email: true,
  password: true,
};

export default function useLoginForm() {
  const [form, setForm] = useImmer<LoginForm>(INITIAL_FORM);
  const [valid, setValid] = useImmer<VALID>(INITIAL_VALID);
  const [message, setMessage] = useState("");

  const { onSetUserInfo } = useAuthContext();

  const router = useRouter();
  const { email, password } = form;
  const isDisableSubmit = !(email && password);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validCheck();
    isValid && login();
  };

  const validCheck = () => {
    if (!emailValidCheck(email)) {
      setValid((draft) => {
        draft.email = false;
      });
      setMessage(VALID_MSG.EMAIL);

      return false;
    } else if (emailValidCheck(email)) {
      setValid((draft) => {
        draft.email = true;
      });
      setMessage("");

      return true;
    }
  };

  const login = async () => {
    try {
      const body = {
        email,
        password,
      };
      const res = await loginApi(body);

      if (res.status === 200) {
        const accessToken = res.data.accessToken;
        const roleName = conversionUserType(res.data.roleName);
        LocalStorage.setItem("accessToken", accessToken);
        SessionStorage.setItem("roleName", roleName);

        const userInfo = {
          name: "코코",
          type: roleName,
          profileImage: "",
          connectType: "이메일 연동",
          creatorId: 0,
        };
        onSetUserInfo(userInfo);
        router.push(PATH.ROOT);
      }
    } catch (error: any) {
      if ([400, 404].includes(error.response.status)) {
        const { message } = error.response.data;

        switch (message) {
          case VALID_MSG.EMAIL:
            setValid((draft) => {
              draft.email = false;
            });
            break;

          case VALID_MSG.NO_EMAIL:
            setValid((draft) => {
              draft.email = false;
            });
            break;

          case VALID_MSG.PSW_MISMATCH:
            setValid((draft) => {
              draft.password = false;
            });
            break;
          // no default
        }
        setMessage(message);
      }
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) throw new Error();

    setForm((draft) => {
      draft[name] = value;
    });
  };

  return {
    form,
    valid,
    isDisableSubmit,
    message,
    handleChangeInput,
    handleSubmit,
  };
}
