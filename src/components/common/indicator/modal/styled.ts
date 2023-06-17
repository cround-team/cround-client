import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 16px;
      right: 50%;
      transform: translateX(50%);
      ${theme.flex.row()};
      gap: 16px;
    }
  `};
`;

export const ActiveBox = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 16px;
      height: 8px;
      background-color: ${theme.colors.primary500};
      border-radius: 4px;
    }
  `};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 8px;
      height: 8px;
      background-color: ${theme.colors.primary50};
      border-radius: 4px;
    }
  `};
`;
