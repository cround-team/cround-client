"use client";

import styled, { css } from "styled-components";

export const SignupTerms = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin: 8px 0 27px 0;
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral900};
      text-align: center;

      button {
        color: ${theme.colors.primary500};
        ${theme.typo.body.sm};
      }
    }
    ${theme.media.desktop} {
      margin: 16px 0 40px 0;
    }
  `};
`;
