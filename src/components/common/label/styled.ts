import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 4px;
    ${theme.typo.title.sm};
    color: ${theme.colors.neutral900};
  `};
`;

export const TipMessage = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral400};
  `};
`;
