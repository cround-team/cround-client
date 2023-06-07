import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      height: 196px;
      padding: 8px 16px;
      border: 1px solid ${theme.colors.disabled};
      border-radius: ${theme.radius.md};
      background-color: ${theme.colors.disabled};
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
      overflow-y: auto;

      &[aria-invalid="false"] {
        border: 1px solid ${theme.colors.primary500};
        background-color: ${theme.colors.primary50};
      }

      :focus {
        border: 1px solid ${theme.colors.neutral200};
        background-color: ${theme.colors.white};
      }

      ::placeholder {
        color: ${theme.colors.neutral300};
      }
    }
  `};
`;
