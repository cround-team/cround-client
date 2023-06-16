"use client";

import { ReactElement, useState } from "react";
import { EyeOffIcon } from "@/assets/icons";
import * as S from "./styled";

export type InputStylesProps = "oauth" | "register";

type InputType = "text" | "password";

type InputProps = {
  autoFocus?: boolean;
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

export default function Input({
  autoFocus = false,
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

  const utilIcon: Record<string, ReactElement> = {
    eyeOff: (
      <S.EyeOffButton tabIndex={-1} onClick={() => handleChangeInputType()}>
        <EyeOffIcon />
      </S.EyeOffButton>
    ),
  };

  const handleChangeInputType = () => {
    setInputType(inputType === "text" ? "password" : "text");
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
        aria-errormessage="err"
      />

      {util && utilIcon[util]}
      {inputMessage && (
        <S.InputMessage id="err" role="alert">
          {inputMessage}
        </S.InputMessage>
      )}
    </S.Container>
  );
}
