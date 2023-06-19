import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
      width: 100%;
    }
  `};
`;

export const FilterButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 24px;
      height: 24px;

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;
