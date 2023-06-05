import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("flex-start")};
      gap: 8px;
      width: 152px;
      height: 228px;
      padding: 16px;
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
      width: 72px;
      height: 72px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  `};
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 4px;
      text-align: center;

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

export const Desc = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral700};
      ${theme.text.skip(3)};
      text-align: center;
    }
  `};
`;
