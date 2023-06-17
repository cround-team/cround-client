import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 16px;
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};

      span {
        margin-bottom: 8px;
        ${theme.typo.body.md};
        color: ${theme.colors.neutral800};
      }

      h3 {
        margin-bottom: 16px;
        ${theme.typo.title.md};
        color: ${theme.colors.neutral900};
      }

      pre {
        margin-bottom: 24px;
        ${theme.typo.body.md};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;
