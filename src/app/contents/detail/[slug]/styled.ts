import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 830px;
    margin: 16px auto 64px auto;
    padding: 0 20px;

    ${theme.media.desktop} {
      max-width: 790px;
      margin: 40px auto 80px auto;
      padding: 0;
    }
  `};
`;
export const Head = styled.div`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
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

export const TextWrapper = styled.div`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      h3 {
        margin-bottom: 24px;
        ${theme.typo.title.lg};
      }

      p {
        margin-bottom: 32px;
        ${theme.typo.body.lg};
      }
    }
  `};
`;
