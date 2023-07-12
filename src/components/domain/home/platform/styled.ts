import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-right: -20px;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-left: 20px;

    .swiper-slide {
      width: 48px !important;
      /* margin-right: 24px !important; */
    }

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      padding-top: 56px;
      padding-bottom: 56px;
      padding-left: 0px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
    }
  `};
`;

export const Figure = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 48px;
    height: 48px;
  `};
`;
