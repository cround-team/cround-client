import Image from "next/image";

import successImg from "public/images/success/content-register-success.png";
import { Button } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import { useDeviceType } from "@/hooks";

type ContentRegisterSuccessProps = {
  handleGoMainPage: () => void;
};

export default function ContentRegisterSuccess({
  handleGoMainPage,
}: ContentRegisterSuccessProps) {
  const { isDesktop } = useDeviceType();
  return (
    <S.Container>
      <h3>콘텐츠 등록이 완료되었습니다!</h3>
      {isDesktop ? (
        <p>크리에이터님의 값진 경험을 공유해 주셔서 감사합니다.</p>
      ) : (
        <p>
          크리에이터님의 값진 경험을 공유해 주셔서
          <br />
          감사합니다.
        </p>
      )}
      <S.Figure>
        <Image
          src={successImg}
          fill
          sizes={media.images.sizes}
          priority
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
