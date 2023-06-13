import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      text-align: center;
      h2 {
        margin-bottom: 4px;
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
      }
      p {
        ${theme.typo.label.sm};
        color: ${theme.colors.neutral500};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 258px;
      height: 258px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `};
`;
