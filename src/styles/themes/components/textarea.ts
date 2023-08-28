import { css } from "styled-components";
import { flex, typo, colors, radius, media } from "../foundations";

export const textarea = {
  styles: {
    base: () => css`
      height: 196px;
      padding: 8px 16px;
      ${typo.label.lg};
      color: ${colors.neutral900};

      &[aria-invalid="false"] {
        border: 1px solid ${colors.primary500};
        background-color: ${colors.primary50};
      }

      :focus {
        border: 1px solid ${colors.neutral200};
        background-color: ${colors.white};
      }

      ::placeholder {
        color: ${colors.neutral300};
      }
    `,
    review: () => css`
      height: 225px;
      padding: 12px 16px;
      ${typo.label.md};
      color: ${colors.neutral900};

      &[aria-invalid="false"] {
        border: 1px solid ${colors.primary500};
        background-color: ${colors.primary50};
      }

      :focus {
        border: 1px solid ${colors.neutral500};
        background-color: ${colors.white};
      }

      ::placeholder {
        color: ${colors.neutral500};
      }
    `,
    asked: () => css`
      ${flex.row()};
      height: 40px;
      padding: 12px 14px;
      ${typo.label.md};
      color: ${colors.neutral900};

      ::placeholder {
        color: ${colors.neutral300};
      }

      ${media.desktop} {
        height: 56px;
        padding: 20px 16px;
      }
    `,
  },
};
