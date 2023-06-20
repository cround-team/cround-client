import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 32px;
      margin-top: 32px;
    }
  `};
`;

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
    }
  `};
`;

export const Icon = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      /* width: 24px;
      height: 24px; */
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.neutral900};
    }
  `};
`;
