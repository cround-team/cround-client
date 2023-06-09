import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;

    ${theme.media.desktop} {
      gap: 9px;
    }
  `};
`;

export const ActiveBox = styled.div`
  ${({ theme }) => css`
    width: 16px;
    height: 8px;
    background-color: ${theme.colors.primary500};
    border-radius: 4px;

    ${theme.media.desktop} {
      width: 18px;
      height: 9px;
      border-radius: 5px;
    }
  `};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.primary50};
    border-radius: 4px;

    ${theme.media.desktop} {
      width: 9px;
      height: 9px;
      border-radius: 5px;
    }
  `};
`;
