import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    width: 100%;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
  `};
`;

export const WriteButton = styled.button`
  ${({ theme }) => css`
    padding: 4px 8px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary300};
    border-radius: 9px;
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral700};
  `};
`;
