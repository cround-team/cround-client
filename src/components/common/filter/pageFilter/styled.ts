import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
    }
  `};
`;

export const FilterButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 24px;
      height: 24px;
      svg {
        width: 100%;
        height: 100%;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;
