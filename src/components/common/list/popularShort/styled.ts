import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.md};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      flex-wrap: wrap;
      gap: 16px;
    }
  `};
`;
