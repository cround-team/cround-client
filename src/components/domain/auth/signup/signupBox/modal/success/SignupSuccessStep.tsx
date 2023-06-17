import Image from "next/image";

import succeessImg from "/public/images/successSignup.png";
import { Button } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type SignupSuccessStepProps = {
  handleRefresh: () => void;
};

export default function SignupSuccessStep({
  handleRefresh,
}: SignupSuccessStepProps) {
  return (
    <>
      <S.TextWrapper>
        <h2>크라운드에 오신 걸 환영합니다!</h2>
        <p>
          크리에이터가 되기 위해 필요한 정보를
          <br />
          크라운드에서 찾아보세요!
        </p>
      </S.TextWrapper>
      <S.Figure>
        <Image
          src={succeessImg}
          fill
          sizes={media.images.sizes}
          alt="Allura Back in Town"
        />
      </S.Figure>
      <Button
        type="button"
        label="완료"
        size="48"
        variant="primary"
        onClick={handleRefresh}
      />
    </>
  );
}
