import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typo.title.sm};
    color: ${theme.colors.neutral900};
    text-align: center;

    ${theme.media.desktop} {
      ${theme.typo.title.md};
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 48px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 56px;
    }
  `};
`;
