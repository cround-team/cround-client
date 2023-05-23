import styled, { css } from "styled-components";

export const CurOptionBtn = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
      ${theme.typo.button.md};
      color: ${theme.colors.neutral900};

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;

export const OptionList = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 32px;
      right: 0;
      padding: 16px;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(2.5px);
      border-radius: ${theme.radius.md};
      z-index: ${theme.zIndex.sort};
      li {
        width: 85px;
        padding: 8px 0;
        border-bottom: 1px solid #d6d6d6;

        :last-child {
          border-bottom: 0px;
        }

        button {
          ${theme.flex.row("space-between")};
          width: 100%;
          ${theme.typo.button.md};
          color: ${theme.colors.neutral900};

          svg {
            width: 24px;
            height: 24px;
            stroke: ${theme.colors.neutral900};
          }

          span {
            ${theme.flex.row("flex-end")};
            ${theme.typo.button.md};
            width: 100%;
            color: ${theme.colors.neutral900};
          }
        }
      }
    }
  `};
`;
