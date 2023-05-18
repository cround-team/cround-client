"use client";

import Image from "next/image";
import * as S from "./styled";

import Test from "/public/images/mobile.gif";

export default function PlatformList() {
  return (
    <>
      <S.Section>
        <Image src={Test} alt="test" width={360} height={100} />
      </S.Section>
    </>
  );
}
