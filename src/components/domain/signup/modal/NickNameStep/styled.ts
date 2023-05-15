import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typo.title.md};
    color: ${theme.colors.neutral900};
    text-align: center;

    ${theme.media.mobile} {
      ${theme.typo.title.sm};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;
    width: 100%;
  `}
`;
