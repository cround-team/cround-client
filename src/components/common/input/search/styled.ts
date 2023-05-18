import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
      width: 100%;
      padding: 8px 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary500};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02),
        0px 4px 10px rgba(0, 0, 0, 0.05);
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
      caret-color: ${theme.colors.primary500};

      ::placeholder {
        color: ${theme.colors.neutral200};
      }
    }
  `};
`;