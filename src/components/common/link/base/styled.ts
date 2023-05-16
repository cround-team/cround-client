"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { LinkSize, LinkVariant } from "./LinkButton";

type LinkProps = {
  size: LinkSize;
  variant: LinkVariant;
};

export const LinkButton = styled(Link)<LinkProps>`
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
