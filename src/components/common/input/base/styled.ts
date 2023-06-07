import styled, { css } from "styled-components";

type LabelProps = {
  isVisibleLabel: boolean;
};

type InputProps = {
  isVisibleLabel: boolean;
  styles: string;
};

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;

      input:focus ~ label {
        display: block;
      }
    }
  `};
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, isVisibleLabel }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 12px;
      left: 16px;
      display: ${isVisibleLabel ? "block" : "none"};
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral500};
    }
  `};
`;

export const Input = styled.input<InputProps>`
  ${({ theme, isVisibleLabel, styles }) => css`
    ${theme.media.mobile} {
      ${styles === "oauth" && theme.input.styles.oauth};
      padding: ${isVisibleLabel ? "28px 16px 12px 16px" : "20px 16px"};
    }
  `};
`;

export const InputMessage = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      bottom: -24px;
      left: 16px;
      ${theme.typo.label.md};

      &[aria-invalid="true"] {
        color: ${theme.colors.neutral400};
      }

      &[aria-invalid="false"] {
        color: ${theme.colors.primary500};
      }
    }
  `};
`;

export const EyeOffButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 20px;
      right: 16px;
      ${theme.flex.row()};

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral500};
      }
    }
  `};
`;
