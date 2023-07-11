import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};

    ${theme.media.desktop} {
      flex-direction: row;
      align-items: flex-start;
      gap: 32px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    width: 100%;

    ${theme.media.desktop} {
      width: auto;
      flex-grow: 1;
    }
  `};
`;

export const Nickname = css`
  ${({ theme }) => css`
    margin-bottom: 56px;

    ${theme.media.desktop} {
      margin-bottom: 64px;
    }
  `};
`;

export const Description = css`
  ${({ theme }) => css`
    margin-bottom: 40px;

    ${theme.media.desktop} {
      textarea {
        height: 122px;
      }
    }
  `};
`;
