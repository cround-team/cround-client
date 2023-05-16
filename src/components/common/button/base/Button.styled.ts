import styled, { css } from "styled-components";
import { ButtonVariant, ButtonSize } from "./Button";

type ButtonProps = {
  size: ButtonSize;
  variant: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, size, variant }) => css`
    box-sizing: border-box;
    width: 100%;
    ${size === "48" && theme.button.size[48]};
    ${size === "56" && theme.button.size[56]};
    ${size === "sm" && theme.button.size.sm};
    ${variant === "primary" && theme.button.variant.primary};
    ${variant === "ghost" && theme.button.variant.ghost};
  `};
`;
