import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
      padding: 16px 20px;
    }

    ${theme.media.desktop} {
      padding: 40px 0;
    }
  `};
`;

export const Social = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 40px;
    }

    ${theme.media.desktop} {
      margin-bottom: 32px;
    }
  `};
`;
