"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import successImg from "public/images/success/short-register-success.png";
import Button from "@/components/common/button/base/Button";
import { PATH } from "@/constants";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

export default function ShortRegisterSuccessPage() {
  const router = useRouter();
  const handleNextPage = () => router.push(PATH.ROOT);

  return (
    <S.Container>
      <h3>숏클래스 등록이 완료되었습니다!</h3>
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
