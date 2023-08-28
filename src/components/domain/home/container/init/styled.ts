import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 24px;

    ${theme.media.desktop} {
      gap: 48px;
    }
  `};
`;

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;

    ${theme.media.tablet} {
      gap: 24px;
    }

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;
