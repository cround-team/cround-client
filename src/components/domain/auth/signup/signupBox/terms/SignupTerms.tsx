"use client";

import { useState } from "react";

import Privacy from "./termsModal/Privacy";
import Terms from "./termsModal/Terms";
import TermsModal from "./termsModal/TermsModal";
import * as S from "./styled";

export default function SignupTerms() {
  const [termsType, setTermsType] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const handleSetIsMounted = () => setIsMounted((prev) => !prev);
  const handleOpenServiceTerms = () => {
    setIsMounted(true);
    setTermsType("service");
  };
  const handleOpenPrivacyPolicy = () => {
    setIsMounted(true);
    setTermsType("privacy");
  };

  return (
    <>
      <S.SignupTerms>
        {`회원가입 시 `}
        <button type="button" onClick={handleOpenServiceTerms}>
          이용약관
        </button>
        {` 및 `}
        <button type="button" onClick={handleOpenPrivacyPolicy}>
          개인정보처리방침
        </button>
        {` 에 동의하게 됩니다.`}
      </S.SignupTerms>
      {isMounted && termsType === "service" && (
        <TermsModal title="이용약관" onSetIsMounted={handleSetIsMounted}>
          <Terms />
        </TermsModal>
      )}
      {isMounted && termsType === "privacy" && (
        <TermsModal
          title="개인정보처리방침"
          onSetIsMounted={handleSetIsMounted}
        >
          <Privacy />
        </TermsModal>
      )}
    </>
  );
}
