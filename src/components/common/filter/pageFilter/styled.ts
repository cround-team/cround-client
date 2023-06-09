import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row("space-between")};
    width: 100%;
    margin-bottom: 24px;

    ${theme.media.desktop} {
      margin-bottom: 32px;
    }
  `};
`;

export const FilterButton = styled.button`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;

    svg {
      width: 100%;
      height: 100%;
      stroke: ${theme.colors.neutral900};
    }

    ${theme.media.tablet} {
      width: 32px;
      height: 32px;
    }
  `};
`;
