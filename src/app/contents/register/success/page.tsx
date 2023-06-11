"use client";

import * as S from "./styled";
import Image from "next/image";
import Button from "@/components/common/button/base/Button";
import { PATH } from "@/constants";
import { useRouter } from "next/navigation";
import successImg from "public/images/success/content-register-success.png";
import { media } from "@/styles/themes/foundations";

export default function page() {
  const router = useRouter();
  const handleNextPage = () => router.push(PATH.ROOT);

  return (
    <S.Container>
      <h3>콘텐츠 등록이 완료되었습니다!</h3>
      <p>
        크리에이터님의 값진 경험을 공유해 주셔서
        <br />
        감사합니다.
      </p>
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
        size="56"
        variant="primary"
        label="메인 페이지로"
        onClick={() => handleNextPage()}
      />
    </S.Container>
  );
}
