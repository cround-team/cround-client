import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    text-align: left;

    h3 {
      margin-bottom: 4px;
      ${theme.typo.title.lg};
      color: ${theme.colors.neutral900};
    }

    p {
      margin-bottom: 68px;
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral600};
    }

    ${theme.media.desktop} {
      max-width: 100%;
      h3 {
        ${theme.typo.head.sm};
      }

      p {
        margin-bottom: 40px;
        ${theme.typo.title.md};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 120px;
    width: 306px;
    height: 260px;

    ${theme.media.desktop} {
      align-self: center;
      margin-bottom: 40px;
      width: 480px;
      height: 407px;
    }
  `};
`;

export const Button = css`
  ${({ theme }) => css`
    max-width: 320px;

    ${theme.media.desktop} {
      align-self: flex-end;
    }
  `};
`;
