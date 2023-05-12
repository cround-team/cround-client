import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 30px;
  `};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.primary50};
    border-radius: 4px;
  `};
`;

export const ActiveBox = styled.div`
  ${({ theme }) => css`
    width: 16px;
    height: 8px;
    background-color: ${theme.colors.primary500};
    border-radius: 4px;
  `};
`;
