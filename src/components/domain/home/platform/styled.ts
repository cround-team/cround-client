import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      /* margin-right: -20px; */
      padding-top: 40px;
      padding-bottom: 44px;
      padding-left: 20px;

      .swiper-slide {
        width: 48px !important;
        margin-right: 24px !important;
      }
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
    }
  `};
`;

export const Figure = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 48px;
      height: 48px;
    }
  `};
`;
