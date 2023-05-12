"use client";

import { EyeOffIcon } from "@/assets/icons";
import * as S from "./styled";

export default function PasswordNewPage() {
  return (
    <>
      <S.Title>비밀번호를 변경해주세요.</S.Title>
      <S.Form>
        <S.InputContainer>
          <div>
            <input placeholder="비밀번호" />
            <button type="button">
              <EyeOffIcon />
            </button>
          </div>
          <div>
            <input placeholder="비밀번호를 확인해 주세요" />
            <button type="button">
              <EyeOffIcon />
            </button>
          </div>
        </S.InputContainer>
        <S.PswGuide>영문자, 숫자, 특수문자 포함 최소 8~20자</S.PswGuide>
        <S.SubmitButton>비밀번호 변경</S.SubmitButton>
      </S.Form>
    </>
  );
}
