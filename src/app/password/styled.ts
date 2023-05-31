import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 360px;
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
  `};
`;
