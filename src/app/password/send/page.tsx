"use client";

import Link from "next/link";
import * as S from "./styled";

export default function PasswordSendPage() {
  return (
    <S.Container>
      <h2>비밀번호 설정 메일 전송</h2>
      <span>cround@naver.com</span>
      <p>
        위 주소로 비밀번호 재설정 링크가 전송되었습니다.
        <br />
        메일 확인 부탁드립니다.
      </p>
      <S.LinkContainer>
        <Link href="/login">이전 페이지로 이동</Link>
        <Link href="">메인 페이지로 이동</Link>
      </S.LinkContainer>
    </S.Container>
  );
}
