import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    right: 16px;
    ${theme.flex.row()};
    width: 24px;
    height: 24px;

    ${theme.media.mobile} {
      top: 20px;
      right: 16px;
    }
  `};
`;
