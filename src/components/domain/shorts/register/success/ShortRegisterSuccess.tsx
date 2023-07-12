import Image from "next/image";

import successImg from "public/images/success/short-register-success.png";
import successCreatorImg from "public/images/success/creator-register-success.png";
import { Button } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import { useDeviceType } from "@/hooks";
import * as S from "./styled";

type ShortRegisterSuccessProps = {
  handleGoMainPage: () => void;
};

export default function ShortRegisterSuccess({
  handleGoMainPage,
}: ShortRegisterSuccessProps) {
  const { isDesktop } = useDeviceType();
  return (
    <S.Container>
      <h3>숏클래스 등록이 완료되었습니다!</h3>
      {isDesktop ? (
        <>
          <p>크리에이터님의 값진 경험을 공유해 주셔서 감사합니다.</p>
        </>
      ) : (
        <>
          <p>
            크리에이터님의 값진 경험을 공유해 주셔서
            <br />
            감사합니다.
          </p>
        </>
      )}
      <S.Figure>
        <Image
          src={isDesktop ? successCreatorImg : successImg}
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
