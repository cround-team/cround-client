import { css } from "styled-components";
import { flex, typo, colors, radius } from "../foundations";

export const button = {
  size: {
    sm: () => css`
      ${flex.row()};
      width: 72px;
      height: 32px;
      border-radius: 12px;
      ${typo.button.sm};
    `,
    48: () => css`
      ${flex.row()};
      height: 48px;
      border-radius: ${radius.md};
      ${typo.button.md};
    `,
    56: () => css`
      ${flex.row()};
      height: 56px;
      border-radius: ${radius.md};
      ${typo.button.md};
    `,
  },

  variant: {
    primary: () => css`
      background-color: ${colors.primary500};
      border: 1px solid ${colors.primary500};
      color: ${colors.white};
      transition: all 0.1s ease-in-out;
      :hover {
        background-color: ${colors.primary600};
      }
    `,
    ghost: () => css`
      background-color: ${colors.white};
      border: 1px solid ${colors.primary500};
      color: ${colors.primary500};
    `,
  },
};
