import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("cetner", "center")}
    width: 100%;
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
      h3 {
        ${theme.typo.head.sm};
      }
      p {
        margin-bottom: 56px;
        ${theme.typo.title.md};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 120px;
    width: 323px;
    height: 260px;

    ${theme.media.desktop} {
      width: 460px;
      height: 366px;
      margin-bottom: 40px;

      width: 490px;
      height: 396px;
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
