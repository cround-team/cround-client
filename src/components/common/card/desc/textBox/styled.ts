import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 0 16px;

      span {
        margin-bottom: 4px;
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral900};
      }
      h3 {
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
        ${theme.text.skip(2)};
      }
    }
  `};
`;
