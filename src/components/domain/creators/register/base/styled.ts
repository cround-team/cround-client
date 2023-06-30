import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
    }
  `};
`;

export const Nickname = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 56px;
    }
  `};
`;

export const Description = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 40px;
    }
  `};
`;
