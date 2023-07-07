import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 360px;
      backdrop-filter: blur(2px);
    }
    ${theme.media.desktop} {
      width: 464px;
    }
  `};
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 12px;
      right: 20px;
      z-index: ${theme.zIndex.icon};
      ${theme.flex.row()};
      width: 24px;
      height: 24px;
      svg {
        width: 14px;
        height: 14px;
        stroke: ${theme.colors.neutral900};
      }
    }

    ${theme.media.desktop} {
      top: 22px;
      right: 32px;
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
      padding: 56px 20px 16px 20px;
      background-color: ${theme.colors.white};
      border-radius: ${theme.radius.md};
    }

    ${theme.media.desktop} {
      padding: 70px 32px 25px 32px;
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

    ${theme.media.desktop} {
      row-gap: 16px;
      column-gap: 20px;
      margin-bottom: 32px;
    }
  `};
`;
