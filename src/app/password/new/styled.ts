import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 40px;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typo.title.md};
    color: ${theme.colors.neutral900};
    text-align: center;

    ${theme.media.desktop} {
      ${theme.typo.title.lg};
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 64px;
    width: 100%;
  `};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;
    width: 100%;
  `};
`;
