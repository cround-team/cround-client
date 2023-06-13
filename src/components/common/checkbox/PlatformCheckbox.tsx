import React from "react";
import Image from "next/image";

import * as S from "./styled";
import { media } from "@/styles/themes/foundations";

type PlatformCheckboxProps = {
  src: string;
  value: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PlatformCheckbox({
  src,
  value,
  title,
  onChange,
}: PlatformCheckboxProps) {
  return (
    <S.Label>
      <S.Input isHidden type="checkbox" value={value} onChange={onChange} />
      <S.Figure>
        <Image src={src} fill sizes={media.images.sizes} alt={value} />
      </S.Figure>
      <S.Name>{title}</S.Name>
    </S.Label>
  );
}
