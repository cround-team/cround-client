import { css } from "styled-components";
import * as S from "./Button.styled";

export type ButtonSize = "sm" | "32" | "48" | "56";
export type ButtonVariant = "primary" | "ghost";
export type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  type?: ButtonType;
  label: string;
  size: ButtonSize;
  variant: ButtonVariant;
  className?: string;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent | React.FormEvent) => void;
};

const test = css`
  background-color: black;
`;

export default function Button({
  type = "submit",
  label,
  size,
  variant,
  className,
  isDisabled = false,
  onClick,
}: ButtonProps) {
  return (
    <S.Button
      className={className}
      type={type}
      size={size}
      variant={variant}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </S.Button>
  );
}
