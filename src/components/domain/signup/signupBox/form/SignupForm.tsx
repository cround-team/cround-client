import { useState } from "react";

import type { StringMap, BooleanMap } from "@/types/common";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import ModalStep from "../../modal/ModalStep";
import * as S from "./styled";
import { useImmer } from "use-immer";
import {
  emailValidCheck,
  nameValidCheck,
  passwordValidCheck,
  psw2ValidCheck,
} from "@/utils/validation";
import { emailDupCheckApi } from "@/utils/api/auth/auth";

const INPUTS = [
  {
    type: "text",
    label: "이름",
    id: "name",
  },
  {
    type: "text",
    label: "이메일",
    id: "email",
  },
  {
    label: "비밀번호",
    id: "password",
    util: "eyeOff",
  },
  {
    label: "비밀번호 확인",
    id: "psw2",
    placeholder: "비밀번호를 확인해 주세요.",
    util: "eyeOff",
  },
];

export default function SignupForm() {
  const [inputMessage, setInputMessage] = useImmer<StringMap>({
    name: "한글 2~6글자 이내",
    email: "",
    password: "영문자, 숫자, 특수문자 포함 최소 8~20자",
    psw2: "영문자, 숫자, 특수문자 포함 최소 8~20자",
  });
  const [data, setData] = useImmer<StringMap>({
    name: "",
    email: "",
    password: "",
    psw2: "",
  });
  const [invalid, setInvalid] = useImmer<BooleanMap>({
    name: true,
    email: true,
    password: true,
    psw2: true,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validCheck();
    isValid && emailDupCheck();
  };

  const validCheck = () => {
    const { name, email, password, psw2 } = data;
    if (!name) {
      setInvalid((draft) => {
        draft.name = false;
      });
      setInputMessage((draft) => {
        draft.name = "비어있는 항목을 입력해주세요.";
      });

      return false;
    } else if (name) {
      const isTrue = nameValidCheck(name);
      const errorMessage = isTrue
        ? "한글 2~6글자 이내"
        : "한글 2~6글자 이내로 입력해 주세요";
      setInvalid((draft) => {
        draft.name = isTrue;
      });
      setInputMessage((draft) => {
        draft.name = errorMessage;
      });

      if (!isTrue) return false;
    }

    if (!email) {
      setInvalid((draft) => {
        draft.email = false;
      });
      setInputMessage((draft) => {
        draft.email = "비어있는 항목을 입력해주세요.";
      });

      return false;
    } else if (email) {
      const isTrue = emailValidCheck(email);
      const errorMessage = isTrue ? "" : "이메일 형식이 올바르지 않습니다";
      setInvalid((draft) => {
        draft.email = isTrue;
      });
      setInputMessage((draft) => {
        draft.email = errorMessage;
      });

      if (!isTrue) return false;
    }

    if (!password) {
      setInvalid((draft) => {
        draft.password = false;
      });
      setInputMessage((draft) => {
        draft.password = "비어있는 항목을 입력해주세요.";
      });

      return false;
    } else if (password) {
      const isTrue = passwordValidCheck(password);
      const errorMessage = isTrue
        ? "영문자, 숫자, 특수문자 포함 최소 8~20자"
        : "영문자, 숫자, 특수문자 포함 최소 8~20자로 입력해 주세요";
      setInvalid((draft) => {
        draft.password = isTrue;
      });
      setInputMessage((draft) => {
        draft.password = errorMessage;
      });

      if (!isTrue) return false;
    }

    if (!psw2) {
      setInvalid((draft) => {
        draft.psw2 = false;
      });
      setInputMessage((draft) => {
        draft.psw2 = "비어있는 항목을 입력해주세요.";
      });

      return false;
    } else if (psw2) {
      const isTrue = psw2ValidCheck(password, psw2);
      const errorMessage = isTrue
        ? "영문자, 숫자, 특수문자 포함 최소 8~20자"
        : "비밀번호가 일치하지 않습니다";
      setInvalid((draft) => {
        draft.psw2 = isTrue;
      });
      setInputMessage((draft) => {
        draft.psw2 = errorMessage;
      });

      if (!isTrue) return false;
    }

    return true;
  };

  const emailDupCheck = async () => {
    try {
      const body = {
        email: data.email,
      };
      const response = await emailDupCheckApi(body);
      if (response.status === 200) {
        setInvalid((draft) => {
          draft.email = true;
        });
        setInputMessage((draft) => {
          draft.email = "";
        });
        setIsModalOpen(true);
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setInvalid((draft) => {
          draft.email = false;
        });
        setInputMessage((draft) => {
          draft.email = error.response.data.message;
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((draft) => {
      draft[id] = value;
    });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          {INPUTS.map((input, idx) => (
            <Input
              type={input.type ? "text" : "password"}
              key={input.id}
              autoFocus={idx === 0}
              isVisibleLabel={data[input.id].length > 0 ? true : false}
              isInvalid={invalid[input.id]}
              inputMessage={inputMessage[input.id]}
              label={input.label}
              styles={"oauth"}
              id={input.id}
              name={input.id}
              placeholder={input.placeholder ?? input.label}
              util={input.util}
              onChange={handleInputChange}
            />
          ))}
        </S.InputContainer>
        <Button label="가입하기" size="56" variant="primary" />
      </S.Form>
      {isModalOpen && <ModalStep data={data} />}
    </>
  );
}
