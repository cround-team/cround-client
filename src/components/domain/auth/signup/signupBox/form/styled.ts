import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
    }
  `};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 32px;
      width: 100%;
      margin-bottom: 64px;
    }

    ${theme.media.desktop} {
      margin-bottom: 80px;
    }
  `};
`;
