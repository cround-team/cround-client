import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 40px;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      text-align: center;

      h2 {
        margin-bottom: 30px;
        ${theme.typo.title.md};
        color: ${theme.colors.neutral900};
      }
      span {
        margin-bottom: 8px;
        ${theme.typo.label.md};
        color: ${theme.colors.neutral900};
      }
      p {
        ${theme.typo.label.md}
        color: ${theme.colors.neutral500};
      }
    }

    ${theme.media.desktop} {
      h2 {
        margin-bottom: 40px;
        ${theme.typo.title.lg};
      }

      span {
        margin-bottom: 16px;
        ${theme.typo.label.lg};
      }

      p {
        ${theme.typo.label.lg};
      }
    }
  `};
`;

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }

    ${theme.media.desktop} {
      flex-direction: row;
    }
  `};
`;
