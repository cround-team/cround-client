import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 40px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: ${theme.colors.white};
  `};
`;

export const PlatformList = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 32.5px;

    ${theme.media.desktop} {
      row-gap: 16px;
      column-gap: 16px;
    }
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
