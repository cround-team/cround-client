import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
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
    ${theme.flex.row()};
    gap: 8px;
    width: 100%;
  `};
`;

export const PrevButton = css`
  width: 82px;
`;

export const NextButton = css`
  width: 230px;
`;
