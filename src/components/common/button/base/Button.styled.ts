import styled, { css } from "styled-components";
import { ButtonVariant, ButtonSize } from "./Button";

type ButtonProps = {
  size: ButtonSize;
  variant: ButtonVariant;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, size, variant }) => css`
    width: 100%;
    ${size === "sm" && theme.button.size.sm};
    ${variant === "primary" && theme.button.variant.primary};
    ${variant === "ghost" && theme.button.variant.ghost};
  `};
`;
