import { ReactElement } from "react";
import * as S from "./styled";
import EyeOffButton from "../../button/eyeOff/EyeOffButton";

type InputProps = {
  autoFocus: boolean;
  type?: "text" | "email" | "password";
  label: string;
  id: string;
  name: string;
  placeholder: string;
  util?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type IconMap = {
  [key: string]: ReactElement;
};

export default function Input({
  autoFocus,
  type = "text",
  label,
  id,
  name,
  placeholder,
  util,
  onChange,
}: InputProps) {
  const utilIcon: IconMap = {
    eyeOff: <EyeOffButton />,
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
      />
      {util && utilIcon[util]}
    </S.Container>
  );
}
