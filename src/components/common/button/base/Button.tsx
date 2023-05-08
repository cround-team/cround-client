import * as S from "./Button.styled";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "primary" | "ghost";
export type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  type?: ButtonType;
  label: string;
  size: ButtonSize;
  variant: ButtonVariant;
};

export default function Button({
  type = "button",
  label,
  size,
  variant,
}: ButtonProps) {
  return (
    <S.Button type={type} size={size} variant={variant}>
      {label}
    </S.Button>
  );
}
