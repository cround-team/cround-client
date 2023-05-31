"use client";

import { ReactElement, useState } from "react";
import * as S from "./styled";
import EyeOffButton from "../../button/eyeOff/EyeOffButton";

export type InputStylesProps = "oauth" | "register";

type InputType = "text" | "password";

type InputProps = {
  autoFocus: boolean;
  type?: InputType;
  styles: InputStylesProps;
  isVisibleLabel: boolean;
  isInvalid: boolean;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  inputMessage?: string;
  util?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type IconMap = {
  [key: string]: ReactElement;
};

export default function Input({
  autoFocus,
  type = "text",
  styles,
  isVisibleLabel,
  label,
  id,
  inputMessage,
  name,
  placeholder,
  util,
  onChange,
  isInvalid = true,
}: InputProps) {
  const [inputType, setInputType] = useState<InputType>(type);
  const utilIcon: IconMap = {
    eyeOff: <EyeOffButton onClick={() => handleTogglePassword()} />,
  };

  const handleTogglePassword = () => {
    inputType === "text" ? setInputType("password") : setInputType("text");
  };

  return (
    <S.Container>
      <S.Label isVisibleLabel={isVisibleLabel}>{label}</S.Label>
      <S.Input
        isVisibleLabel={isVisibleLabel}
        type={inputType}
        id={id}
        styles={styles}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
        aria-invalid={isInvalid ? "true" : "false"}
      />
      {util && utilIcon[util]}
      {inputMessage && (
        <S.InputMessage aria-invalid={isInvalid ? "true" : "false"}>
          {inputMessage}
        </S.InputMessage>
      )}
    </S.Container>
  );
}
