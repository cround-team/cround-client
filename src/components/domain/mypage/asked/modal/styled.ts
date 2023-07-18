import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 320px;
    height: 80%;
    backdrop-filter: blur(2px);
    background-color: #f7f7f7;
    border-radius: ${theme.radius.md};

    ${theme.media.desktop} {
      width: 1200px;
    }
  `};
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 18px;
    right: 16px;
    z-index: ${theme.zIndex.icon};
    ${theme.flex.row()};
    width: 16px;
    height: 16px;
    svg {
      width: 12px;
      height: 12px;
      stroke: ${theme.colors.neutral900};
    }

    ${theme.media.desktop} {
      width: 32px;
      height: 32px;
      top: 12px;
      right: 12px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  `};
`;
