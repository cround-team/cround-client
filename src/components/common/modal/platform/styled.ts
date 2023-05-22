import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 360px;
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 42px 20px 16px 20px;
      background-color: ${theme.colors.white};
      backdrop-filter: blur(2px);
      border-radius: ${theme.radius.md};
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
      margin-bottom: 16px;
    }
  `};
`;
