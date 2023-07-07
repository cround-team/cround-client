import styled, { css } from "styled-components";

export const Form = styled.form``;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    margin-bottom: 32px;
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    margin-bottom: 213px;
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
  ${({ theme }) => css`
    width: 82px;
  `};
`;

export const NextButton = css`
  ${({ theme }) => css`
    width: 230px;
  `};
`;
