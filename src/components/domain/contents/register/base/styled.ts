import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
  `};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
    width: 100%;
    margin-bottom: 121px;

    ${theme.media.desktop} {
      gap: 47.48px;
      margin-bottom: 40px;
    }
  `};
`;

export const TextArea = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      textarea {
        height: 122px;
      }
    }
  `};
`;

export const Button = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      align-self: flex-end;
      max-width: 320px;
    }
  `};
`;
