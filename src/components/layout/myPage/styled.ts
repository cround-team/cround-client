import styled, { css } from "styled-components";

export const Test = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
      width: 45.83%;
      height: 100vh;
      padding: 0 8px;
      background-color: ${theme.colors.white};
    }
  `};
`;

export const Layout = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
    }
  `};
`;

export const User = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      gap: 8px;
      padding: 23px 0 24px 8px;
      border-bottom: 1px solid ${theme.colors.neutral50};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 40px;
      height: 40px;
    }
  `};
`;

export const NameLoginTypeGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 2px;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const LoginType = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral400};
    }
  `};
`;

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        padding-left: 8px;
      }

      li:last-child {
        border-bottom: 1px solid ${theme.colors.neutral50};
      }

      li > a,
      li > button {
        display: block;
        width: 100%;
        ${theme.typo.button.sm};
        color: ${theme.colors.neutral900};
        text-align: left;
      }
    }
  `};
`;
