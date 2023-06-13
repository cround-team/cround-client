import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      width: 100%;
    }
  `}
`;

export const List = styled.li`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 50%;
      padding: 8px 0 10px 0;
      text-align: center;
    }

    &[aria-selected="true"] {
      border-bottom: 2px solid ${theme.colors.primary500};
      button {
        color: ${theme.colors.neutral900};
      }
    }

    &[aria-selected="false"] {
      border-bottom: 2px solid ${theme.colors.white};
      button {
        color: ${theme.colors.neutral300};
      }
    }

    :hover button {
      color: ${theme.colors.neutral900};
    }

    button {
      display: inline-block;
      width: auto;
      /* padding: 2px 0; */

      ${theme.typo.button.md};
      transition: all 0.25s ease-in-out;
    }
  `};
`;
