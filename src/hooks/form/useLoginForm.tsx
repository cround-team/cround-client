import { useRouter } from "next/navigation";
import { useState } from "react";
import { useImmer } from "use-immer";

import { PATH, VALID_MSG } from "@/constants";
import { hasKey } from "@/utils/form";
import { loginApi } from "@/utils/api";
import { emailValidCheck } from "@/utils/validation";

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

  const { email, password } = form;
  const isDisableSubmit = !(email && password);

  const router = useRouter();

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
        // const tokenWithoutBearer = res.data.accessToken.replace("Bearer ", "");
        localStorage.setItem("accessToken", res.data.accessToken);
        router.push(PATH.ROOT);
      }
    } catch (error: any) {
      if (error.response.status === 400) {
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
