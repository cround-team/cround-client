import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    ${theme.typo.title.lg};
    text-align: center;
    color: ${theme.colors.neutral900};
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css``};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 20px;
    margin-bottom: 8px;

    div {
      position: relative;
      width: 100%;

      input {
        width: 100%;
        padding: 16px 0 16px 16px;
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
    display: inline-block;
    width: 100%;
    padding-left: 16px;
    margin-bottom: 50px;
    ${theme.typo.label.md};
    color: ${theme.colors.neutral400};
  `};
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px 0;
    border-radius: ${theme.radius.md};
    ${theme.typo.button.sm};
    ${theme.button.variant.primary};
  `};
`;
