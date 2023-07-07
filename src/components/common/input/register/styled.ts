import { InputSize } from "./RegisterInput";
import styled, { css } from "styled-components";

type ContainerProps = {
  tipMessage: string;
};

type InputProps = {
  inputSize: InputSize;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, tipMessage }) => css`
    position: relative;
    ${theme.flex.col("center", "flex-start")};
    gap: ${tipMessage ? "16px" : "8px"};
    width: 100%;
  `};
`;

export const Input = styled.input<InputProps>`
  ${({ theme, inputSize }) => css`
    width: 100%;
    ${inputSize === "sm" && "padding: 8px 16px"};
    ${inputSize === "md" && "padding: 12px 19px 12px 16px;"};

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
  `};
`;

// 유효메세지, 에러메세지 공통 스타일
export const Message = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: -24px;
    left: 16px;
    ${theme.typo.label.md};
  `};
`;

export const ValidMessage = styled(Message)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral400};
  `};
`;

export const ErrorMessage = styled(Message)`
  ${({ theme }) => css`
    color: ${theme.colors.primary500};
  `};
`;
