"use client";

import Link from "next/link";

import { CroundLogoIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import Utils from "./utils/Utils";
import StepHeader from "./step/StepHeader";
import useChangeHeader from "./hooks/useChangeHeader";
import Navigation from "./navigation/Navigation";
import * as S from "./styled";

export default function Header() {
  const { headerType, stepName } = useChangeHeader();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={PATH.ROOT}>
            <CroundLogoIcon />
          </Link>
        </S.Logo>
        <Utils />
      </S.Wrapper>
      {headerType === "step" && <StepHeader label={stepName} />}
      {headerType === "navigate" && <Navigation />}
    </S.Header>
  );
}
