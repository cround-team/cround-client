"use client";

import LinkButton from "@/components/common/link/base/LinkButton";
import { PATH } from "@/constants";
import * as S from "./styled";
import { useMediaQuery } from "react-responsive";
import { media } from "@/styles/themes/foundations";

export default function PasswordSendPage() {
  const isMobile = useMediaQuery({
    query: media.mobile,
  });
  return (
    <S.Container>
      <S.TextWrapper>
        <h2>비밀번호 설정 메일 전송</h2>
        <span>cround@naver.com</span>
        <p>
          위 주소로 비밀번호 재설정 링크가 전송되었습니다.
          <br />
          메일 확인 부탁드립니다.
        </p>
      </S.TextWrapper>
      <S.LinkWrapper>
        <LinkButton
          href={PATH.AUTH}
          label="이전 페이지로 이동"
          size={isMobile ? "48" : "56"}
          variant="ghost"
        />
        <LinkButton
          href={PATH.ROOT}
          label="메인 페이지로 이동"
          size={isMobile ? "48" : "56"}
          variant="primary"
        />
      </S.LinkWrapper>
    </S.Container>
  );
}
