import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
      width: 100%;
    }
  `};
`;

export const ImageNameGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 4px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.md};
      color: ${theme.colors.neutral300};
    }
  `};
`;

export const LikeBookmarkGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;

      div {
        ${theme.flex.row()};
        gap: 4px;

        svg {
          width: 18px;
          height: 18px;
          stroke: ${theme.colors.neutral300};
        }

        span {
          ${theme.typo.label.md};
          color: ${theme.colors.neutral300};
        }
      }
    }
  `};
`;
