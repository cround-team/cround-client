"use client";

import Image from "next/image";
import * as S from "./styled";

import bannerSlideWomanImg from "public/images/banner-slide-woman.png";

export default function Banner() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.TextWrapper>
            <h2>
              인스타그램, <br />
              팔로우 수 어떻게 늘리지?
            </h2>
            <p>
              한 달 만에 2000 팔로우 달성에 성공할 수 있었던
              <br />
              꿀팁 들으러 가기
            </p>
          </S.TextWrapper>
          <S.Figure>
            <Image
              src={bannerSlideWomanImg}
              alt="Women Power Sharing with the World"
            />
          </S.Figure>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
