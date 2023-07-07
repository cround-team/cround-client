"use client";

import { PATH } from "@/constants";
import { useDeviceType } from "@/hooks";
import { LinkButton } from "@/components/common";
import * as S from "./styled";

export default function PasswordSendPage() {
  const { isDesktop } = useDeviceType();

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
          size={isDesktop ? "56" : "48"}
          variant="ghost"
        />
        <LinkButton
          href={PATH.ROOT}
          label="메인 페이지로 이동"
          size={isDesktop ? "56" : "48"}
          variant="primary"
        />
      </S.LinkWrapper>
    </S.Container>
  );
}
