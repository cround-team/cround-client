import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    ${theme.typo.title.lg};
    text-align: center;
    color: ${theme.colors.neutral900};
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css``};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 20px;
    margin-bottom: 8px;
  `};
`;

export const PswGuide = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    padding-left: 16px;
    margin-bottom: 50px;
    ${theme.typo.label.md};
    color: ${theme.colors.neutral400};
  `};
`;
