import styled, { css } from "styled-components";

export const Button = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    right: 16px;
    ${theme.flex.row()};
    width: 24px;
    height: 24px;
    cursor: pointer;

    ${theme.media.mobile} {
      top: 20px;
      right: 16px;
    }
  `};
`;
