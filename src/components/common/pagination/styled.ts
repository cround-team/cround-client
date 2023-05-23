import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 30px;
      margin: 64px 0;
    }
  `};
`;

export const PageNumWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 24px;
    }
  `};
`;

export const PageNumButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.md};
      color: ${theme.colors.neutral400};
      &:first-child {
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;

export const ChevronButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      width: 16px;
      height: 16px;

      svg {
        width: 100%;
        height: 100%;
      }

      &[aria-disabled="true"] {
        svg {
          stroke: ${theme.colors.neutral400};
        }
      }
      &[aria-disabled="false"] {
        svg {
          stroke: ${theme.colors.neutral900};
        }
      }
    }
  `};
`;
