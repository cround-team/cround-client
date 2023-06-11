import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 22px;
    left: 30px;
    ${theme.flex.row()};
    width: 24px;
    height: 24px;

    ${theme.media.mobile} {
      top: 8px;
      left: 16px;
    }
  `};
`;
