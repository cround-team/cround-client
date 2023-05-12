"use client";

import { useImmer } from "use-immer";
import { SignupStep } from "@/types/signup";
import * as S from "./styled";
import InputNickName from "../modal/InputNickName";
import PickPlatforms from "../modal/PickPlatforms";
import PickThemes from "../modal/PickThemes";
import SuccessSignup from "../modal/SuccessSignup";
import { EyeOffIcon } from "@/assets/icons";

export default function SignupForm() {
  const [isMounted, setIsMounted] = useImmer({
    nickName: false,
    platforms: false,
    themes: false,
    success: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("우선 성공 로직");
    setIsMounted((draft) => {
      draft.nickName = true;
    });
  };

  const handlePrevStep = <T extends SignupStep>(cur: T, prev: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[prev] = !draft[prev];
    });
  };

  const handleNextStep = <T extends SignupStep>(cur: T, next: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[next] = !draft[next];
    });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <div>
            <label>이름</label>
            <input placeholder="이름" autoFocus />
          </div>
          <div>
            <label>이메일</label>
            <input placeholder="이메일" />
          </div>
          <div>
            <label>비밀번호</label>
            <input placeholder="비밀번호" />
            <button>
              <EyeOffIcon />
            </button>
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input placeholder="비밀번호를 확인해 주세요." />
            <button>
              <EyeOffIcon />
            </button>
          </div>
          <S.PswGuide>영문자, 숫자, 특수문자 포함 최소 8~20자</S.PswGuide>
        </S.InputContainer>
        <S.SubmitButton onClick={handleSubmit}>가입하기</S.SubmitButton>
      </S.Form>
      {isMounted.nickName && (
        <InputNickName
          isMounted={isMounted.nickName}
          cur="nickName"
          next="platforms"
          handleNextStep={handleNextStep}
        />
      )}
      {isMounted.platforms && (
        <PickPlatforms
          isMounted={isMounted.platforms}
          cur="platforms"
          prev="nickName"
          next="themes"
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {isMounted.themes && (
        <PickThemes
          isMounted={isMounted.themes}
          cur="themes"
          prev="platforms"
          next="success"
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {isMounted.success && (
        <SuccessSignup
          isMounted={isMounted.success}
          cur="success"
          prev="themes"
          handlePrevStep={handlePrevStep}
        />
      )}
    </>
  );
}
