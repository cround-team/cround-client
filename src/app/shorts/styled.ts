import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin-bottom: 64px;
    padding: 0 20px;

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 80px;
      padding: 0;
    }
  `};
`;

export const PopularContainer = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;

    ${theme.media.desktop} {
      gap: 48px;
    }
  `};
`;

export const BaseContainer = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    margin-top: 32px;

    ${theme.media.desktop} {
      margin-top: 48px;
    }
  `};
`;
