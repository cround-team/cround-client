"use client";

import styled, { css } from "styled-components";

export const List = styled.li`
  ${({ theme }) => css`
    padding: 8px 12px 12px 12px;

    a {
      ${theme.typo.button.md};
      color: ${theme.colors.neutral300};
    }

    &[aria-current="page"] {
      border-bottom: 3px solid ${theme.colors.primary500};
      a {
        color: ${theme.colors.neutral900};
      }
    }

    &[aria-current="false"] {
      border-bottom: 3px solid ${theme.colors.white};
    }
  `};
`;
