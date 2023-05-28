import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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
    }
  `};
`;
