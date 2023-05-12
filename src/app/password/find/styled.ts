import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 8px;
    ${theme.typo.title.lg};
    text-align: center;
    color: ${theme.colors.neutral900};
  `};
`;

export const Desc = styled.p`
  ${({ theme }) => css`
    margin-bottom: 30px;
    ${theme.typo.body.md};
    text-align: center;
    color: ${theme.colors.neutral500};
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    input {
      margin-bottom: 50px;
      padding: 16px 0 16px 16px;
      width: 100%;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral100};
      border-radius: ${theme.radius.md};
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};

      ::placeholder {
        color: ${theme.colors.neutral400};
      }
    }

    button {
      width: 100%;
      padding: 20px 0;
      background-color: ${theme.colors.primary500};
      border-radius: ${theme.radius.md};
      ${theme.typo.button.sm};
      color: ${theme.colors.white};
    }
  `};
`;
