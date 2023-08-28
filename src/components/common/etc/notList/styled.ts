import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;
    color: ${theme.colors.neutral900};
    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;

export const Label = styled.p`
  ${({ theme }) => css`
    ${theme.typo.button.md};

    ${theme.media.desktop} {
      ${theme.typo.button.xl};
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.typo.title.sm};

    ${theme.media.desktop} {
      ${theme.typo.title.lg};
    }
  `};
`;
