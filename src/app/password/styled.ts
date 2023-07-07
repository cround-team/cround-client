import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  `};
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding-top: 24px;
      padding-left: 20px;
      padding-right: 20px;
    }

    ${theme.media.desktop} {
      padding-top: 40px;
      padding-left: 0px;
      padding-right: 0px;
    }
  `};
`;
