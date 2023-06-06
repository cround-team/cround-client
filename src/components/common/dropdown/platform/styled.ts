import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
    }
  `};
`;

export const DropdownButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
      width: 100%;
      height: 48px;
      padding: 0 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const Selected = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral700};
    }
  `};
`;

export const Dropdown = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      z-index: ${theme.zIndex.modal};
      ${theme.flex.col()};
      width: 100%;
      margin-top: 4px;
      padding: 0 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }
  `};
`;
