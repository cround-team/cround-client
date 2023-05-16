import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      margin-bottom: 40px;
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
        ${theme.typo.title.lg};
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
  `};
`;
