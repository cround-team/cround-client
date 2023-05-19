import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("flex-start")};
      gap: 4px;
      padding: 16px;

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
    }
  `};
`;
