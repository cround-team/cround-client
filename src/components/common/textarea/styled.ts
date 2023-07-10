import styled, { css } from "styled-components";

type TextAreaProps = {
  styles: "base" | "review" | "asked";
};

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const TextArea = styled.textarea<TextAreaProps>`
  ${({ theme, styles }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.disabled};
    border-radius: ${theme.radius.md};
    background-color: ${theme.colors.disabled};
    font-family: inherit;
    overflow-y: auto;
    ${styles === "base" && theme.textarea.styles.base()};
    ${styles === "asked" && theme.textarea.styles.asked()};
    ${styles === "review" && theme.textarea.styles.review()};
  `};
`;
