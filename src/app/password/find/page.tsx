"use client";

import { useRouter } from "next/navigation";
import * as S from "./styled";

export default function PasswordFindPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/password/send");
  };

  return (
    <>
      <S.Title>비밀번호 찾기</S.Title>
      <S.Desc>
        회원가입할 때 등록한 이메일을 입력하시면, <br />
        비밀번호 재설정 링크를 보내드립니다.
      </S.Desc>
      <S.Form onSubmit={handleSubmit}>
        <input placeholder="이메일 입력" />
        <button>링크 전송</button>
      </S.Form>
    </>
  );
}
