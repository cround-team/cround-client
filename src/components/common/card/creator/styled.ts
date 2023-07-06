import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("flex-start")};
      gap: 8px;
      padding: 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
      aspect-ratio: 152/228;
      max-width: 277.5px;
      max-height: 374.49px;
    }

    ${theme.media.desktop} {
      gap: 14.63px;
      width: 277.5px;
      height: 374.79px;
      padding: 29.26px 29.01px;
      border-radius: ${theme.radius.lg};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      border-radius: 50%;
      width: 61.02%;
      aspect-ratio: 1/1;

      img {
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

      h3 {
        ${theme.typo.button.md};
        color: ${theme.colors.neutral900};
      }
      span {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral900};
      }
    }

    ${theme.media.desktop} {
      gap: 7.32px;
      h3 {
        ${theme.typo.title.lg};
      }
      span {
        ${theme.typo.body.lg};
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

    ${theme.media.desktop} {
      ${theme.typo.body.lg};
    }
  `};
`;
