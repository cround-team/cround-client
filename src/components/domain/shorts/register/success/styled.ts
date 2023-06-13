import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      margin-bottom: 120px;
      width: 323px;
      height: 260px;
    }
  `};
`;
