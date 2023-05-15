"use client";

import { useState } from "react";
import * as S from "./styled";

type PlatformRadioProps = {
  isHidden: boolean;
  id: string;
  name: string;
  icon: React.ReactElement;
};

export default function Tsx({ id, name, icon }: PlatformRadioProps) {
  const [checked, setChecked] = useState(false);
  // const handleClick = () => {
  //   setChecked((prev) => !prev);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    console.log("tt");
  };

  return (
    <S.Container>
      <S.Input type="radio" id={id} checked={checked} onChange={handleChange} />
      <S.Label htmlFor={id} onClick>
        {icon}
        <span>{name}</span>
      </S.Label>
    </S.Container>
  );
}
