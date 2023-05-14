import styled, { css } from "styled-components";

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    ${theme.media.mobile} {
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
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
