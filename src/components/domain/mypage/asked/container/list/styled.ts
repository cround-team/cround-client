import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()};
    gap: 28px;
    width: 100%;
    padding: 40px 0;
    border-top: 1px solid ${theme.colors.neutral100};
  `};
`;

export const Date = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 50%;
    z-index: 1;
    transform: translate(50%, -50%);
    padding: 0 8px;
    background-color: #f7f7f7;
    ${theme.typo.body.sm};
    color: ${theme.colors.neutral500};
  `};
`;
