"use client";

import { useImmer } from "use-immer";

import * as S from "./styled";
import Privacy from "./termsModal/Privacy";
import Terms from "./termsModal/Terms";
import TermsModal from "./termsModal/TermsModal";

export type termsType = "terms" | "privacy";
export type termsTitle = "이용약관" | "개인정보처리방침";

export default function SignupTerms() {
  const [isMounted, setIsMounted] = useImmer({
    terms: false,
    privacy: false,
  });
  const handleSetIsMounted = (type: termsType) => {
    setIsMounted((draft) => {
      draft[type] = !draft[type];
    });
  };

  return (
    <>
      <S.SignupTerms>
        {`회원가입 시 `}
        <button type="button" onClick={() => handleSetIsMounted("terms")}>
          이용약관
        </button>
        {` 및 `}
        <button type="button" onClick={() => handleSetIsMounted("privacy")}>
          개인정보처리방침
        </button>
        {` 에 동의하게 됩니다.`}
      </S.SignupTerms>
      {isMounted.terms && (
        <TermsModal
          isMounted={isMounted.terms}
          termsType="terms"
          title="이용약관"
          onSetIsMounted={handleSetIsMounted}
        >
          <Terms />
        </TermsModal>
      )}
      {isMounted.privacy && (
        <TermsModal
          isMounted={isMounted.privacy}
          termsType="privacy"
          title="개인정보처리방침"
          onSetIsMounted={handleSetIsMounted}
        >
          <Privacy />
        </TermsModal>
      )}
    </>
  );
}
