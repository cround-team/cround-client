import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;
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