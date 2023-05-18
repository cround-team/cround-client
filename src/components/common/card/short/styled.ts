import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;
      width: 208px;
      padding-bottom: 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
      height: 118px;
      background-color: ${theme.colors.neutral50};
      border-radius: ${theme.radius.md} ${theme.radius.md} 0px 0px;

      img {
        width: 100%;
      }
    }
  `};
`;
