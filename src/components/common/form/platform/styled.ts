import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 40px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      background-color: ${theme.colors.white};
    }
  `};
`;

export const PlatformList = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      flex-wrap: wrap;
      row-gap: 8px;
      column-gap: 32.5px;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: grid;
      grid-template-columns: "25.63% 71.88%";
      width: 100%;
      gap: 8px;
    }
  `};
`;
