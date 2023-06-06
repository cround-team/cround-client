import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 4px;
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;

// export const CustomLabel = styled(Label).attrs(() => ({
//   as: "h3",
// }))``;

export const TipMessage = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral400};
    }
  `};
`;
