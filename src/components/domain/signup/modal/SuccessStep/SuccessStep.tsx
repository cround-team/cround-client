import Image from "next/image";

import type { SignupStep } from "@/types/signup";
import succeessImgSrc from "/public/images/successSignup.png";
import Button from "@/components/common/button/base/Button";
import PrevButton from "../prevButton/PrevButton";
import * as S from "./styled";

type SuccessStepProps = {
  onPrevStep: <T extends SignupStep>(cur: T, prev: T) => void;
  onPushLogin: () => void;
};

export default function SuccessStep({
  onPrevStep,
  onPushLogin,
}: SuccessStepProps) {
  return (
    <>
      <PrevButton onClick={() => onPrevStep("success", "platforms")} />
      <S.TextWrapper>
        <h2>크라운드에 오신 걸 환영합니다!</h2>
        <p>
          크리에이터가 되기 위해 필요한 정보를
          <br />
          크라운드에서 찾아보세요!
        </p>
      </S.TextWrapper>
      <S.Figure>
        <Image src={succeessImgSrc} alt="Allura Back in Town" />
      </S.Figure>
      <Button
        type="button"
        label="완료"
        size="48"
        variant="primary"
        onClick={onPushLogin}
      />
    </>
  );
}
