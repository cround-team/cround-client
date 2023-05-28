import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 4px;
      width: 100%;
      padding: 12px 0px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
      ${theme.typo.label.md};
      color: ${theme.colors.neutral400};

      svg {
        width: 8px;
        height: 4px;
        stroke: ${theme.colors.neutral400};
      }
    }
  `};
`;
