import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};

      width: 100%;
      padding: 12px 0px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
      ${theme.typo.label.md};
      color: ${theme.colors.neutral400};

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.neutral400};
      }
    }

    ${theme.media.desktop} {
      padding: 16px 0;
      ${theme.typo.label.lg};
      svg {
        width: 24px;
        height: 24px;
      }
    }
  `};
`;
