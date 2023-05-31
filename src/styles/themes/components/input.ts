import { css } from "styled-components";
import { flex, typo, colors, radius } from "../foundations";

export const input = {
  styles: {
    oauth: () => css`
      width: 100%;
      padding: 20px 16px;
      ${typo.label.lg};
      color: ${colors.neutral900};
      background-color: #f3f3f3;
      border: 1px solid #f3f3f3;
      border-radius: ${radius.md};
      ${typo.label.lg};
      caret-color: ${colors.primary500};

      &[aria-invalid="false"] {
        background-color: ${colors.primary50};
        border: 1px solid ${colors.primary500};
        border-radius: ${radius.md};
      }

      :focus {
        border: 1px solid ${colors.neutral500};
        background-color: ${colors.white};
      }

      ::placeholder {
        color: ${colors.neutral500};
      }
    `,
    register: () => css``,
  },
};
