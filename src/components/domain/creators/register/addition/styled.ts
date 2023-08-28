import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;

    ${theme.media.desktop} {
      gap: 40px;
    }
  `};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    width: 100%;
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: "25.63% 71.88%";
    width: 100%;
    gap: 8px;

    ${theme.media.desktop} {
      ${theme.flex.row("flex-end")};
    }
  `};
`;

export const PrevButton = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      max-width: 82px;
    }
  `};
`;

export const NextButton = css`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      max-width: 230px;
    }
  `};
`;
