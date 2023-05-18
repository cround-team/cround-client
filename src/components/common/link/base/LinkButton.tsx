import * as S from "./styled";

export type LinkSize = "sm" | "32" | "48" | "56";
export type LinkVariant = "primary" | "ghost";

type LinkButtonProps = {
  label: string;
  size: LinkSize;
  variant: LinkVariant;
  href: string;
};

export default function LinkButton({
  label,
  size,
  variant,
  href,
}: LinkButtonProps) {
  return (
    <S.LinkButton size={size} variant={variant} href={href}>
      {label}
    </S.LinkButton>
  );
}
