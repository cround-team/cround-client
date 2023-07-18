import { PATH, VALID_MSG } from "@/constants";
import { updatePasswordApi } from "@/utils/api";
import { passwordValidCheck } from "@/utils/validation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function useNewPassword() {
  const [user, setUser] = useImmer({
    password: "",
    confirmPassword: "",
  });
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [inputMessage, setInputMessage] = useState(VALID_MSG.PSW_TIP);
  const [invalid, setInvalid] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    const id = searchParams.get("id") as string;
    const code = searchParams.get("code") as string;
    setId(id);
    setCode(code);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validCheck();
    isValid && updatePassword();
  };

  const validCheck = () => {
    if (user.password) {
      const isTrue = passwordValidCheck(user.password);
      const errorMessage = isTrue ? VALID_MSG.PSW_TIP : VALID_MSG.PSW;
      setInvalid(isTrue);
      setInputMessage(errorMessage);

      if (!isTrue) return false;
    }

    if (user.confirmPassword) {
      const isTrue = user.password === user.confirmPassword;
      const errorMessage = isTrue ? VALID_MSG.PSW_TIP : VALID_MSG.PSW_MISMATCH;
      setInvalid(isTrue);
      setInputMessage(errorMessage);

      if (!isTrue) return false;
    }

    return true;
  };

  const updatePassword = async () => {
    try {
      const body = {
        id: parseInt(id, 10),
        code,
        password: user.password,
        confirmPassword: user.confirmPassword,
      };

      const res = await updatePasswordApi(body);
      console.log("body", body);
      console.log("res", res);
      router.push(PATH.AUTH);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" || name === "confirmPassword") {
      setUser((draft) => {
        draft[name] = value;
      });
    }
  };

  return {
    user,
    inputMessage,
    invalid,
    handleChange,
    handleSubmit,
  };
}
