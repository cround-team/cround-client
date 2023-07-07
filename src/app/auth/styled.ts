import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    height: 100%;
    margin: 0 auto;
    padding: 16px 20px;

    ${theme.media.desktop} {
      padding: 40px 0;
    }
  `};
`;

export const Social = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;
    width: 100%;
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    margin-bottom: 40px;

    ${theme.media.desktop} {
      margin-bottom: 32px;
    }
  `};
`;
