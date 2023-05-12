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
  },
  variant: {
    primary: () => css`
      background-color: ${colors.primary500};
      border: 1px solid ${colors.primary500};
      color: ${colors.white};
    `,
    ghost: () => css`
      background-color: ${colors.white};
      border: 1px solid ${colors.primary500};
      color: ${colors.primary500};
    `,
  },
};
