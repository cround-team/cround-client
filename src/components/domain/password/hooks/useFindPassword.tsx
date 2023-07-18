import { useState } from "react";
import { useRouter } from "next/navigation";

import { findPasswordApi } from "@/utils/api";
import { emailValidCheck } from "@/utils/validation";
import { PATH } from "@/constants";

export default function useFindPassword() {
  const [email, setEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validCheck();
    isValid && findPassword();
  };

  const findPassword = async () => {
    try {
      const body = { email };

      await findPasswordApi(body);
      router.push(`${PATH.PASSWORD.SEND}?email=${email}`);
    } catch (error: any) {
      console.error(error);
    }
  };

  const validCheck = () => {
    if (email === "") {
      setIsValid(false);
      setInputMessage("비어있는 항목을 입력해주세요");

      return false;
    } else if (!emailValidCheck(email)) {
      setIsValid(false);
      setInputMessage("이메일 형식이 올바르지 않습니다");

      return false;
    } else if (emailValidCheck(email)) {
      setIsValid(true);
      setInputMessage("");

      return true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return {
    email,
    inputMessage,
    isValid,
    handleSubmit,
    handleChange,
  };
}
