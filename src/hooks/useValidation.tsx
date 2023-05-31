import { emailValidCheck } from "@/utils/validation";
import { useState } from "react";

type ValidatePasswordType = "base" | "signup";

export const useValidation = () => {
  const [invalid, setInvalid] = useState(true);
  const [inputMessage, setInputMessage] = useState("");

  const validateEmail = (email: string) => {
    if (email === "") {
      setInvalid((prev) => false);
      setInputMessage("비어있는 항목을 입력해주세요");

      return false;
    } else if (!emailValidCheck(email)) {
      setInvalid((prev) => false);
      setInputMessage("이메일 형식이 올바르지 않습니다");

      return false;
    } else {
      setInvalid((prev) => true);
      setInputMessage("");

      return true;
    }
  };

  const validatePassword = (type: ValidatePasswordType, password: string) => {
    if (type === "base") {
      if (password === "") {
        setInvalid(false);
        setInputMessage("비어있는 항목을 입력해주세요");
        return false;
      } else {
        setInvalid(true);
        setInputMessage("");
        return true;
      }
    }
  };

  return {
    invalid,
    inputMessage,
    validateEmail,
    validatePassword,
  };
};
