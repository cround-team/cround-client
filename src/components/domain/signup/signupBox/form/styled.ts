import styled, { css } from "styled-components";

export const Form = styled.form``;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    gap: 20px;
    ${theme.flex.col()};
    width: 400px;

    ${theme.media.mobile} {
      gap: 8px;
      width: 320px;
    }
  `};
`;

export const PswGuide = styled.span`
  ${({ theme }) => css`
    width: 100%;
    margin-top: -12px;
    padding-left: 16px;
    margin-bottom: 50px;
    ${theme.typo.label.md};
    color: ${theme.colors.neutral400};

    ${theme.media.mobile} {
      margin-top: 0px;
      margin-bottom: 40px;
    }
  `};
`;
