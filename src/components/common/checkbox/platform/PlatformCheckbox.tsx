import Image from "next/image";

import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type PlatformCheckboxProps = {
  isChecked: boolean;
  src: string;
  value: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PlatformCheckbox({
  isChecked,
  src,
  value,
  title,
  onChange,
}: PlatformCheckboxProps) {
  return (
    <S.Label>
      <S.Input
        isHidden
        checked={isChecked}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <S.Figure>
        <Image src={src} fill sizes={media.images.sizes} alt={value} />
      </S.Figure>
      <S.Name>{title}</S.Name>
    </S.Label>
  );
}
