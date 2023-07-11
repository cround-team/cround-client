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
      gap: 40px;
      margin-bottom: 40px;
    }
  `};
`;

export const TextArea = css`
  ${({ theme }) => css`
    textarea {
      height: 280px;
    }

    ${theme.media.desktop} {
      textarea {
        height: 160px;
      }
    }
  `};
`;

export const Button = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      width: 320px;
      align-self: flex-end;
    }
  `};
`;
