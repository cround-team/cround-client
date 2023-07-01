import styled, { css } from "styled-components";

type ContainerProps = {
  tipMessage: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, tipMessage }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.col("center", "flex-start")};
      gap: ${tipMessage ? "16px" : "8px"};
      width: 100%;
    }
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      padding: 12px 19px 12px 16px;
      background-color: #f3f3f3;
      border: 1px solid #f3f3f3;
      border-radius: ${theme.radius.md};
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
      caret-color: ${theme.colors.primary500};

      &[aria-invalid="false"] {
        background-color: ${theme.colors.primary50};
        border: 1px solid ${theme.colors.primary50};
      }

      :focus {
        border: 1px solid ${theme.colors.neutral200};
        background-color: ${theme.colors.white};
      }

      ::placeholder {
        ${theme.typo.label.lg};
        ${theme.colors.neutral300};
      }
    }
  `};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
    }
  `};
`;

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 25%;
      right: 16px;
      ${theme.flex.row()};
      width: 24px;
      height: 24px;
      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral500};
      }
    }
  `};
`;

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      width: 100%;
      height: 32px;
      margin-top: -8px;
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral200};
      }
    }
  `};
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }
  `};
`;
