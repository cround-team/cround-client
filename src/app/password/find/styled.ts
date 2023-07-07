import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 40px;
  `};
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;
    h2 {
      ${theme.typo.title.md};
      text-align: center;
      color: ${theme.colors.neutral900};
    }
    p {
      ${theme.typo.label.md};
      text-align: center;
      color: ${theme.colors.neutral500};
    }

    ${theme.media.desktop} {
      gap: 16px;
      h2 {
        ${theme.typo.title.lg};
      }
      p {
        ${theme.typo.label.lg};
      }
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 40px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 64px;
    }
  `};
`;
