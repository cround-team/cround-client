import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typo.button.md};
    color: ${theme.colors.neutral900};

    ${theme.media.desktop} {
      ${theme.typo.button.xl};
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    width: 100%;

    ${theme.media.desktop} {
      row-gap: 32px;
      column-gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(585px, 1fr));
    }
  `};
`;
