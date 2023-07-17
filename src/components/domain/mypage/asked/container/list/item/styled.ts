import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-end", "flex-end")}
    gap: 8px;
    width: 100%;
  `};
`;

export const Text = styled.div`
  ${({ theme }) => css`
    width: 200px;
    padding: 8px;
    border-radius: 12px 0px 12px 12px;
    background-color: ${theme.colors.white};
    ${theme.typo.body.sm};
    color: ${theme.colors.black};
  `};
`;

export const Time = styled.span`
  ${({ theme }) => css`
    ${theme.typo.body.xs};
    color: ${theme.colors.neutral500};
  `};
`;
