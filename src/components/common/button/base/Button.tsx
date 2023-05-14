import * as S from "./Button.styled";

export type ButtonSize = "sm" | "48" | "56";
export type ButtonVariant = "primary" | "ghost";
export type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  type?: ButtonType;
  label: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onClick?: (e: React.MouseEvent) => void;
};

export default function Button({
  type = "submit",
  label,
  size,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <S.Button type={type} size={size} variant={variant} onClick={onClick}>
      {label}
    </S.Button>
  );
}
