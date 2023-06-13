import styled, { css } from "styled-components";

export const Form = styled.form``;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 32px;
      width: 320px;
      margin-bottom: 64px;
    }
  `};
`;
