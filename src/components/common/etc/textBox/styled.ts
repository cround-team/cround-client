import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 4px;

    span {
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral900};
    }
    h3 {
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral900};
      ${theme.text.skip(2)};
    }

    p {
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral900};
      ${theme.text.skip(2)};
    }

    ${theme.media.desktop} {
      gap: 7.31px;

      span {
        ${theme.typo.body.lg}
      }

      h3 {
        ${theme.typo.title.lg};
      }

      p {
        ${theme.typo.body.lg};
      }
    }
  `};
`;
