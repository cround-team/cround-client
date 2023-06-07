"use client";

import Image from "next/image";
import * as S from "./styled";
import Button from "@/components/common/button/base/Button";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";

import successImg from "public/images/success/creator-register-success.png";
import { media } from "@/styles/themes/foundations";

export default function CreatorRegisterSuccessPage() {
  const router = useRouter();

  return (
    <S.Container>
      <h3>크리에이터 등록이 완료되었습니다!</h3>
      <p>
        크리에이터로 등록해 주셔서 감사합니다.
        <br />
        크리에이터 도전을 희망하는 멘티님들께 값진
        <br />
        경험을 공유해 주세요!
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
        onClick={() => router.push(PATH.ROOT)}
      />
    </S.Container>
  );
}
