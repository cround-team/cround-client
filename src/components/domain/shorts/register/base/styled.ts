import styled, { css } from "styled-components";

export const Form = styled.form``;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
    margin-bottom: 121px;
  `};
`;
