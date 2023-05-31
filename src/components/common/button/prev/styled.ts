import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      width: 24px;
      height: 24px;

      svg {
        width: 6px;
        height: 12px;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;
