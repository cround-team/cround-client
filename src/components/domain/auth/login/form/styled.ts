import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css``};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 320px;
      margin-bottom: 40px;
    }
  `};
`;
