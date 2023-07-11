import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    width: 100%;
    max-width: 320px;
    margin: 0 auto;

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
      max-width: 590px;
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
    margin-bottom: 96px;
    width: 323px;
    height: 260px;

    ${theme.media.desktop} {
      /* width: 590px;
      height: 496px; */
      width: 390px;
      height: 300px;
      margin-bottom: 40px;
    }
  `};
`;

export const Button = css`
  width: 100%;
  max-width: 320px;
  align-self: flex-end;
`;
