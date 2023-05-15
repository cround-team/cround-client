import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;

    ${theme.media.mobile} {
      gap: 0px;
      width: 100%;
    }
  `};
`;

export const ButtonStyles = styled.button`
  ${({ theme }) => css`
    padding: 12px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10.8333px;

    span {
      display: none;
    }
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;
      width: 100%;

      span {
        display: block;
        ${theme.typo.button.md};
        color: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const GoogleButton = styled(ButtonStyles)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};
`;

export const KakaoButton = styled(ButtonStyles)`
  ${({ theme }) => css`
    background-color: #fae100;
  `};
`;

export const Span = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral500};

    ${theme.media.mobile} {
      display: none;
    }
  `};
`;
