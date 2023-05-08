"use client";

import styled, { css } from "styled-components";

export const SearchInput = styled.form`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    box-sizing: border-box;
    width: 240px;
    padding: 8px 12px;
    border: 1px solid ${theme.colors.primary500};
    border-radius: 8px;

    & > input {
      width: 150px;
      ${theme.typo.label.md};
    }
    & > input::placeholder {
      ${theme.typo.label.md};
      color: ${theme.colors.neutral200};
    }

    button {
      width: 16px;
      height: 16px;
    }
  `};
`;
