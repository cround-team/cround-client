import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;

    ${theme.media.tablet} {
      margin-left: 68px;
      gap: 16px;
    }

    ${theme.media.desktop} {
      margin-left: 41px;
    }
  `};
`;

export const Nickname = styled.h3`
  ${({ theme }) => css`
    ${theme.typo.title.md};
    color: ${theme.colors.neutral900};

    ${theme.media.tablet} {
      ${theme.typo.title.lg};
    }
  `};
`;

export const PlatformThemeGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 4px;
    span {
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral800};
    }

    ${theme.media.tablet} {
      gap: 7.29px;
      span {
        ${theme.typo.body.lg};
      }
    }
  `};
`;
