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
  signupValidCheck,
} from "@/utils/validation";

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
    name: "한글 6글자 이내",
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
    const { name, email, password, psw2 } = data;

    if (!name) {
      return validCheck("name", name);
    } else if (!email) {
      return validCheck("email", email);
    } else if (!password) {
      return validCheck("password", password);
    } else if (!psw2) {
      return validCheck("psw2", psw2);
    }

    if (
      signupValidCheck("name", name) &&
      signupValidCheck("email", email) &&
      signupValidCheck("password", password) &&
      psw2 === password
    ) {
      setIsModalOpen(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((draft) => {
      draft[id] = value;
    });
    validCheck(id, value);
  };

  const validCheck = (id: string, value: string) => {
    setInvalid((draft) => {
      draft[id] = signupValidCheck(id, value);
    });

    if (id === "password") {
      data.psw2 !== "" &&
        setInvalid((draft) => {
          draft.psw2 = value === data.psw2;
        });
    }
    if (id === "psw2") {
      setInvalid((draft) => {
        draft.psw2 = value === data.password;
      });
    }

    if (invalid.name) {
      setInputMessage((draft) => {
        draft.name = "한글 6글자 이내";
      });
    }
    if (!invalid.name) {
      setInputMessage((draft) => {
        draft.name = "6글자 이내로 입력해 주세요";
      });
    }

    if (invalid.email) {
      setInputMessage((draft) => {
        draft.email = "";
      });
    }

    if (!invalid.email) {
      setInputMessage((draft) => {
        draft.email = "이메일 형식이 올바르지 않습니다";
      });
    }

    if (invalid.password) {
      setInputMessage((draft) => {
        draft.password = "영문자, 숫자, 특수문자 포함 최소 8~20자";
      });
    }

    if (!invalid.password) {
      setInputMessage((draft) => {
        draft.password =
          "영문자, 숫자, 특수문자 포함 최소 8~20자로 입력해 주세요";
      });
    }

    if (invalid.psw2) {
      setInputMessage((draft) => {
        draft.psw2 = "영문자, 숫자, 특수문자 포함 최소 8~20자";
      });
    }

    if (!invalid.psw2) {
      setInputMessage((draft) => {
        draft.psw2 = "영문자, 숫자, 특수문자 포함 최소 8~20자로 입력해 주세요";
      });
    }
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
        <Button
          label="가입하기"
          size="56"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
      {isModalOpen && <ModalStep data={data} />}
    </>
  );
}
