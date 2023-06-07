import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      width: 100%;
      height: 32px;
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral200};
      }
    }
  `};
`;
