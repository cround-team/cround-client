import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 32px;
    h3 {
      margin-bottom: 16px;
      ${theme.typo.title.md};
      color: ${theme.colors.neutral900};
    }
    p {
      margin-bottom: 24px;
      ${theme.typo.body.md};
      color: ${theme.colors.black};
    }

    ${theme.media.tablet} {
      h3 {
        ${theme.typo.title.lg};
      }
      p {
        ${theme.typo.body.lg};
      }
    }
  `};
`;
