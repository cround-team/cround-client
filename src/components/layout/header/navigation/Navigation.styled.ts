"use clinet";

import styled, { css } from "styled-components";

type ListProps = {
  isActive: boolean;
};

export const Nav = styled.nav`
  ${({ theme }) => css`
    width: 1200px;
    margin: 0 auto;
    background: ${theme.colors.white};

    ul {
      ${theme.flex.row("flex-start")};
    }
    ${theme.media.mobile} {
      width: 100%;
      padding-left: 20px;
    }
  `};
`;

export const List = styled.li<ListProps>`
  ${({ theme, isActive }) => css`
    padding: 8px 12px 12px 12px;
    border-bottom: 3px solid
      ${isActive ? theme.colors.primary500 : theme.colors.white};

    a {
      ${theme.typo.button.md};
      color: ${theme.colors.neutral300};
    }
  `};
`;
