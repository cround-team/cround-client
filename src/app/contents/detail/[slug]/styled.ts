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
export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
      width: 100%;
      margin-bottom: 8px;
      word-break: break-word;
      span {
        ${theme.typo.body.md};
        color: ${theme.colors.neutral800};
      }

      button {
        width: 20px;
        height: 20px;
        svg {
          width: 100%;
          height: 100%;
          stroke: ${theme.colors.neutral900};
        }
      }
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      width: 100%;
      word-break: break-word;

      h3 {
        margin-bottom: 16px;
        ${theme.typo.title.md};
        color: ${theme.colors.neutral900};
      }

      p {
        white-space: pre-wrap;
        margin-bottom: 24px;
        ${theme.typo.body.md};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;
