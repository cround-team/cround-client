import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("space-between")};
      width: 100%;
      max-width: 585px;
      margin: 24px auto;
      padding: 8px 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary500};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02),
        0px 4px 10px rgba(0, 0, 0, 0.05);
      border-radius: ${theme.radius.md};
    }

    ${theme.media.desktop} {
      margin: 48px auto;
      padding: 16px 20px;
    }
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 90%;
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
      caret-color: ${theme.colors.primary500};

      ::placeholder {
        color: ${theme.colors.neutral200};
      }
    }
  `};
`;
