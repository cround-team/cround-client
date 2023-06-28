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
      gap: 8px;
      width: 100%;
      margin-bottom: 8px;
      word-break: break-word;

      h3 {
        ${theme.typo.title.md};
        color: ${theme.colors.neutral900};
      }

      p {
        white-space: pre-wrap;
        ${theme.typo.body.md};
        color: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const Head = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
      width: 100%;
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

export const Video = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 16px;
      border-radius: 15px;

      iframe {
        border-radius: ${theme.radius.md};
      }
    }
  `};
`;
