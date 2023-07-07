import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
  `};
`;

export const Nickname = css`
  margin-bottom: 56px;
`;

export const Description = css`
  margin-bottom: 40px;
`;
