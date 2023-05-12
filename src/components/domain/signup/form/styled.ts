import styled, { css } from "styled-components";

export const Form = styled.form``;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    gap: 20px;
    ${theme.flex.col()};

    div {
      position: relative;
      width: 400px;
      padding: 16px 16px 16px 16px;
      border: 1px solid ${theme.colors.neutral100};
      border-radius: 12px;

      & > label {
        display: none;
      }
      & > input {
        width: 100%;
        background-color: ${theme.colors.white};
        ${theme.typo.label.lg};
        color: ${theme.colors.neutral900};

        ::placeholder {
          color: ${theme.colors.neutral400};
        }
      }
      & > button {
        position: absolute;
        top: 16px;
        right: 16px;
        ${theme.flex.row()};
        width: 24px;
        height: 24px;
      }
    }
  `};
`;

export const PswGuide = styled.span`
  ${({ theme }) => css`
    width: 100%;
    margin-top: -12px;
    padding-left: 16px;
    margin-bottom: 50px;
    ${theme.typo.label.md};
    color: ${theme.colors.neutral400};
  `};
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    width: 400px;
    padding: 20px 0;
    border-radius: 12px;
    background-color: ${theme.colors.primary500};
    ${theme.typo.button.sm};
    color: ${theme.colors.white};
  `};
`;
