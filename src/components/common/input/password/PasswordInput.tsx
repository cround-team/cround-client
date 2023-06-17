import { useState } from "react";

import { EyeOffIcon } from "@/assets/icons";
import * as S from "./styled";

type InputProps = {
  autoFocus?: boolean;
  isVisibleLabel: boolean;
  isInvalid: boolean;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  inputMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInput({
  autoFocus = false,
  isVisibleLabel,
  label,
  id,
  inputMessage,
  name,
  placeholder,
  onChange,
  isInvalid = true,
}: InputProps) {
  const [inputType, setInputType] = useState("password");

  const handleChangeInputType = () => {
    setInputType(inputType === "text" ? "password" : "text");
  };

  return (
    <S.Container>
      <S.Label isVisibleLabel={isVisibleLabel}>{label}</S.Label>
      <S.Input
        type={inputType}
        isVisibleLabel={isVisibleLabel}
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
        aria-invalid={isInvalid ? "true" : "false"}
        aria-errormessage="err"
      />
      <S.EyeOffButton
        type="button"
        tabIndex={-1}
        onClick={() => handleChangeInputType()}
      >
        <EyeOffIcon />
      </S.EyeOffButton>
      {isInvalid && inputMessage && (
        <S.ValidMessage>{inputMessage}</S.ValidMessage>
      )}
      {!isInvalid && inputMessage && (
        <S.ErrorMessage id="err" role="alert">
          {inputMessage}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
}
