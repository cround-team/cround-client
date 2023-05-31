"use client";
import { useState } from "react";
import { useImmer } from "use-immer";

import type { BooleanMap, StringMap } from "@/types/common";
import { emailValidCheck } from "@/utils/validation";
import { loginApi } from "@/utils/api/auth/auth";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import * as S from "./styled";
import { useValidation } from "@/hooks/useValidation";

const INPUTS = [
  {
    type: "text",
    label: "이메일",
    id: "email",
    isMessage: false,
  },
  {
    label: "비밀번호",
    id: "psw",
    util: "eyeOff",
    isMessage: true,
  },
];

export default function LoginForm() {
  const [user, setUser] = useImmer<StringMap>({
    email: "",
    psw: "",
  });
  const [inputMessage, setInputMessage] = useState("");
  const [invalid, setInvalid] = useImmer<BooleanMap>({
    email: true,
    psw: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validCheck();
    isValid && login();
  };

  const validCheck = () => {
    const { email, psw } = user;

    // 이메일 체크
    if (email === "") {
      setInvalid((draft) => {
        draft.email = false;
      });
      setInputMessage("비어있는 항목을 입력해주세요");

      return false;
    } else if (!emailValidCheck(email)) {
      setInvalid((draft) => {
        draft.email = false;
      });
      setInputMessage("이메일 형식이 올바르지 않습니다");

      return false;
    } else if (emailValidCheck(email)) {
      setInvalid((draft) => {
        draft.email = true;
      });
      setInputMessage("");

      return true;
    }

    // 패스워드 체크
    if (psw === "") {
      setInvalid((draft) => {
        draft.psw = false;
      });
      return setInputMessage("비어있는 항목을 입력해주세요");
    }
  };

  const login = async () => {
    const { email, psw } = user;
    try {
      const body = {
        email: email,
        password: psw,
      };
      const res = await loginApi(body);
      if (res) {
        if (res.status === 200) {
          const tokenWithoutBearer = res.data.accessToken.replace(
            "Bearer ",
            ""
          );
          localStorage.setItem("accessToken", tokenWithoutBearer);
        }
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        const { message } = error.response.data;
        switch (message) {
          case "이메일 형식이 올바르지 않습니다.":
            setInvalid((draft) => {
              draft.email = false;
            });
            break;

          case "존재하지 않는 회원입니다.":
            setInvalid((draft) => {
              draft.email = false;
            });
            break;

          case "비밀번호가 일치하지 않습니다.":
            setInvalid((draft) => {
              draft.psw = false;
            });
            break;

          default:
            return;
        }
        setInputMessage(message);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email" || name === "psw") {
      setUser((draft) => {
        draft[name] = value;
      });
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        {INPUTS.map((input, idx) => (
          <Input
            key={input.id}
            type={input.type ? "text" : "password"}
            inputMessage={input.isMessage ? inputMessage : ""}
            isVisibleLabel={user[input.id].length > 0 ? true : false}
            isInvalid={invalid[input.id]}
            styles={"oauth"}
            autoFocus={idx === 0}
            label={input.label}
            id={input.id}
            name={input.id}
            placeholder={input.label}
            util={input.util}
            onChange={handleInputChange}
          />
        ))}
      </S.InputContainer>
      <Button label="로그인" size="56" variant="primary" />
    </S.Form>
  );
}
