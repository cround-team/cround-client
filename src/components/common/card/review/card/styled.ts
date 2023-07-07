import styled, { css } from "styled-components";

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;
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
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.md};
    color: ${theme.colors.black};
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
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.typo.body.sm};
    color: ${theme.colors.black};
  `};
`;
