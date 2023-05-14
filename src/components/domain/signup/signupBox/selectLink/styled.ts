import styled, { css } from "styled-components";

import type { StyledListProps } from "./SelectLink";

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 56px;

    ${theme.media.mobile} {
      margin-bottom: 40px;
    }
  `}
`;

export const List = styled.li<StyledListProps>`
  ${({ theme, isActive }) => css`
    width: 50%;
    padding: 16px 8px;
    border-bottom: 2px solid
      ${isActive ? theme.colors.primary500 : theme.colors.white};
    text-align: center;

    :hover a {
      color: ${theme.colors.neutral900};
    }

    a {
      display: inline-block;
      width: auto;
      padding: 2px 0;
      ${theme.typo.button.lg};
      color: ${isActive ? theme.colors.neutral900 : theme.colors.neutral300};
      transition: all 0.25s ease-in-out;
    }

    ${theme.media.mobile} {
      padding: 0;

      a {
        ${theme.typo.button.md};
      }
    }
  `};
`;
