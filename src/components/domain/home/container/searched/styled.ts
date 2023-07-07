import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
    width: 100%;
    margin-top: 32px;

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

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;

export const Icon = css`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    stroke: ${theme.colors.neutral900};

    ${theme.media.desktop} {
      width: 32px;
      height: 32px;
    }
  `};
`;
