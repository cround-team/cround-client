import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin-top: 16px;
    margin-bottom: 64px;
    padding: 0 20px;

    ${theme.media.desktop} {
      width: 1200px;
      margin: 32px auto 80px auto;
      padding: 0;
    }
  `};
`;

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;
