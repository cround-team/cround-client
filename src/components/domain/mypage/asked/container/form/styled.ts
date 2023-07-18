import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    position: absolute;
    bottom: 16px;
    ${theme.flex.row("center", "flex-end")};
    gap: 8px;

    ${theme.media.desktop} {
      gap: 24px;
    }
  `};
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 256px;
    border-radius: ${theme.radius.md};
    border: 1px solid ${theme.colors.disabled};
    background-color: ${theme.colors.white};
    font-family: inherit;
    overflow-y: hidden;
    ${theme.textarea.styles.asked()};

    ${theme.media.desktop} {
      width: 1088px;
    }
  `};
`;

export const SendButton = styled.button`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.primary200};
    border-radius: 50%;
    margin-bottom: 8px;

    svg {
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.white};
    }

    &[aria-details="true"] {
      background-color: ${theme.colors.primary500};
    }

    ${theme.media.desktop} {
      width: 40px;
      height: 40px;

      svg {
        width: 26.67px;
        height: 26.67px;
      }
    }
  `};
`;
