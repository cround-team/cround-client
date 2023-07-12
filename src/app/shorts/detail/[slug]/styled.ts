import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 790px;
    margin: 16px auto 64px auto;
    padding: 0 20px;

    ${theme.media.desktop} {
      margin: 40px auto 80px auto;
      padding: 0;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      gap: 0px;
      margin-bottom: 32px;

      h3 {
        margin-bottom: 24px;
        ${theme.typo.title.lg};
      }

      p {
        ${theme.typo.body.lg};
      }
    }
  `};
`;

export const Head = styled.div`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      margin-bottom: 8px;
      span {
        ${theme.typo.body.lg};
      }
      button {
        width: 24px;
        height: 24px;
      }
    }
  `};
`;

export const Video = css`
  ${({ theme }) => css`
    margin-bottom: 16px;

    iframe {
      border-radius: ${theme.radius.md};
      aspect-ratio: 320/170;
    }

    ${theme.media.desktop} {
      margin-bottom: 32px;

      iframe {
        border-radius: 29px;
        width: 790px;
        height: 420px;
      }
    }
  `};
`;
