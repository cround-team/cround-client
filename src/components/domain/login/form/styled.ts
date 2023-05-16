import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css``};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    gap: 20px;
    ${theme.flex.col()};
    width: 400px;

    ${theme.media.mobile} {
      gap: 8px;
      width: 320px;
      margin-bottom: 40px;
    }
  `};
`;
