import Image from "next/image";

import { Button } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import successImg from "public/images/success/creator-register-success.png";
import * as S from "./styled";
import { useDeviceType } from "@/hooks";

type CreatorRegisterSuccessProps = {
  handleGoMainPage: () => void;
};

export default function CreatorRegisterSuccess({
  handleGoMainPage,
}: CreatorRegisterSuccessProps) {
  const { isDesktop } = useDeviceType();
  return (
    <S.Container>
      <h3>크리에이터 등록이 완료되었습니다!</h3>
      <p>
        {!isDesktop ? (
          <>
            크리에이터로 등록해 주셔서 감사합니다.
            <br />
            크리에이터 도전을 희망하는 멘티님들께 값진
            <br />
            경험을 공유해 주세요!
          </>
        ) : (
          <>
            크리에이터로 등록해 주셔서 감사합니다. 크리에이터 도전을 희망하는
            멘티님들께
            <br />
            값진 경험을 공유해 주세요!
          </>
        )}
      </p>
      <S.Figure>
        <Image
          src={successImg}
          fill
          sizes={media.images.sizes}
          alt="Croods Standing"
        />
      </S.Figure>
      <Button
        css={S.Button}
        size="56"
        variant="primary"
        label="메인 페이지로"
        onClick={handleGoMainPage}
      />
    </S.Container>
  );
}
