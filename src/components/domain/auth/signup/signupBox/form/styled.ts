import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
    width: 100%;
    margin-bottom: 64px;

    ${theme.media.desktop} {
      margin-bottom: 80px;
    }
  `};
`;
