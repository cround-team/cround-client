import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;
  `};
`;

export const GoogleButton = styled.button`
  ${({ theme }) => css`
    padding: 8px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10.8238px;
  `};
`;

export const KakaoButton = styled.button`
  ${({ theme }) => css`
    /* 수정 필요 */
    padding: 9px 7.24px 8.14px 7px;
    background-color: #fae100;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10.8333px;
  `};
`;

export const Span = styled.span`
  ${({ theme }) => css`
    ${theme.typo.sm};
    color: ${theme.colors.na500};
  `};
`;
