import styled, { css } from "styled-components";

export const TextWrapper = styled.div`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      h2 {
        ${theme.typo.title.md};
      }

      p {
        ${theme.typo.title.sm};
      }
    }
  `};
`;

export const Figure = styled.figure`
  position: relative;
  width: 258px;
  height: 258px;
`;
