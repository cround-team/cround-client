import { useState } from "react";
import Image from "next/image";

import * as S from "./styled";

type PlatformCheckboxProps = {
  src: string;
  value: string;
  title: string;
  onSelect: (platform: string) => void;
  onUnSelect: (platform: string) => void;
};

export default function PlatformCheckbox({
  src,
  value,
  title,
  onSelect,
  onUnSelect,
}: PlatformCheckboxProps) {
  const [checked, setChecked] = useState(false);

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
      <Image src={src} width={85} height={85} alt={value} />
      <S.Name>{title}</S.Name>
    </S.Label>
  );
}
