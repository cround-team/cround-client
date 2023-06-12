import { useState } from "react";
import Image from "next/image";

import * as S from "./styled";
import { media } from "@/styles/themes/foundations";

type PlatformCheckboxProps = {
  isChecked: boolean;
  src: string;
  value: string;
  title: string;
  onSelect: (platform: string) => void;
  onUnSelect: (platform: string) => void;
};

export default function PlatformCheckbox({
  isChecked,
  src,
  value,
  title,
  onSelect,
  onUnSelect,
}: PlatformCheckboxProps) {
  const [checked, setChecked] = useState(isChecked ?? false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setChecked((prev) => !prev);
    checked ? onSelect(value) : onUnSelect(value);
  };

  return (
    <S.Label>
      <S.Input
        isHidden
        type="checkbox"
        checked={checked}
        value={value}
        onChange={handleChange}
      />
      <S.Figure>
        <Image src={src} fill sizes={media.images.sizes} alt={value} />
      </S.Figure>
      <S.Name>{title}</S.Name>
    </S.Label>
  );
}
