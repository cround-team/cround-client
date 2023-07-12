import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;
    max-width: 585px;
    padding: 16px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.neutral50};
    border-radius: ${theme.radius.md};
  `};
`;

export const NameRatingGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 9.29px;

    ${theme.media.desktop} {
      gap: 8px;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.md};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 4.57px;

    svg {
      width: 9.43px;
      height: 8.99px;
    }

    ${theme.media.desktop} {
      gap: 2px;

      svg {
        width: 12.57px;
        height: 11.98px;
      }
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.typo.body.sm};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      ${theme.typo.body.lg};
    }
  `};
`;
