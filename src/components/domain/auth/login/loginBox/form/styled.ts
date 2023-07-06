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
      gap: 8px;
      width: 100%;
      margin-bottom: 40px;
    }

    ${theme.media.desktop} {
      gap: 32px;
      margin-bottom: 64px;
    }
  `};
`;
