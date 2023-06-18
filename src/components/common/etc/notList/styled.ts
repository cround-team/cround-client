import styled, { css } from "styled-components";

export const NotList = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      margin-top: 32px;
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Label = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.md};
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.title.sm};
    }
  `};
`;
