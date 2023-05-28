import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      padding: 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const NameRatingGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 9.29px;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.md};
      color: ${theme.colors.black};
    }
  `};
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 4.57px;

      svg {
        width: 9.43px;
        height: 8.99px;
      }
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.body.sm};
      color: ${theme.colors.black};
    }
  `};
`;
