import Image from "next/image";

import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type ListTitleProps = {
  isRenderImg?: boolean;
  className?: string;
  href: string;
  src?: string;
  alt?: string;
  label: string;
};

export default function ListTitle({
  isRenderImg = true,
  className,
  href,
  src = "",
  alt = "",
  label,
}: ListTitleProps) {
  return (
    <S.CustomLink href={href}>
      <S.Title>
        {isRenderImg && (
          <S.Figure>
            <Image src={src} alt={alt} fill sizes={media.images.sizes} />
          </S.Figure>
        )}
        {label}
      </S.Title>
      <S.ChevronIcon className={className} />
    </S.CustomLink>
  );
}
