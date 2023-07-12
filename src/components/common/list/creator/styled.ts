import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
    width: 100%;

    ${theme.media.tablet} {
      row-gap: 24px;
      column-gap: 19px;
      grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
    }

    ${theme.media.desktop} {
      row-gap: 32px;
      column-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(277.5px, 1fr));
    }
  `};
`;
