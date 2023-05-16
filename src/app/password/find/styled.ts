import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
    }
  `};
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 40px;
      h2 {
        margin-bottom: 8px;
        ${theme.typo.title.md};
        text-align: center;
        color: ${theme.colors.neutral900};
      }
      p {
        ${theme.typo.label.md};
        text-align: center;
        color: ${theme.colors.neutral500};
      }
    }
    ${theme.media.desktop} {
      h2 {
        ${theme.typo.title.lg};
      }
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 40px;
    width: 100%;
  `};
`;
