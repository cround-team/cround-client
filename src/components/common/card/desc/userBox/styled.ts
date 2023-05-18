import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
    }
  `};
`;

export const LeftContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 4px;

      figure {
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #d9d9d9;

        img {
          border-radius: 50%;
        }
      }

      span {
        ${theme.typo.label.md};
        color: ${theme.colors.neutral500};
      }
    }
  `};
`;

export const RightContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;

      div {
        ${theme.flex.row()};
        gap: 4px;
      }
    }
  `};
`;
