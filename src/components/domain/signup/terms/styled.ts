"use client";

import styled, { css } from "styled-components";

export const SignupTerms = styled.div`
  ${({ theme }) => css`
    margin: 20px 0;
    ${theme.typo.body.md};
    color: ${theme.colors.neutral900};
    text-align: center;

    button {
      ${theme.typo.body.md};
      color: ${theme.colors.primary500};
    }
  `};
`;
