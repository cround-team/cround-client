import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
  `};
`;

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px 16px 16px 16px;
    border: 1px solid ${theme.colors.neutral100};
    border-radius: ${theme.radius.md};
    ${theme.typo.label.lg};
    color: ${theme.colors.neutral900};
    caret-color: ${theme.colors.primary500};

    ${theme.media.mobile} {
      padding: 20px 16px;
      background-color: #f3f3f3;
      border: 1px solid #f3f3f3;
    }

    :focus {
      border: 1px solid ${theme.colors.neutral500};
      background-color: ${theme.colors.white};
    }

    ::placeholder {
      color: ${theme.colors.neutral500};
    }
  `};
`;
