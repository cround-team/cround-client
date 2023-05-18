import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 50%;
      padding: 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral100};
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      margin-bottom: 8px;
      width: 72px;
      height: 72px;
      border-radius: 50%;

      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  `};
`;

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 4px;

      h2 {
        ${theme.typo.button.md};
        color: ${theme.colors.neutral900};
      }
      span {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;
