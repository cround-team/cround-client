import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    h3 {
      margin-bottom: 4px;
      ${theme.typo.title.lg};
      color: ${theme.colors.neutral900};
    }

    p {
      margin-bottom: 68px;
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral600};
    }

    ${theme.media.desktop} {
      h3 {
        ${theme.typo.head.sm};
      }
      p {
        margin-bottom: 56px;
        ${theme.typo.title.md};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 120px;
    width: 323px;
    height: 260px;

    /* aspect-ratio: 320/260; */
  `};
`;
