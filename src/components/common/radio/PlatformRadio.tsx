"use client";

import { useState } from "react";
import * as S from "./styled";

type PlatformRadioProps = {
  id: string;
  name: string;
  icon: React.ReactElement;
};

export default function PlatformRadio({ id, name, icon }: PlatformRadioProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked && setChecked(true);
  };

  return (
    <S.Label>
      <S.Input
        isHidden
        type="radio"
        id={id}
        checked={checked}
        onChange={handleChange}
        onClick={handleClick}
      />
      {icon}
      <S.Name>{name}</S.Name>
    </S.Label>
  );
}
