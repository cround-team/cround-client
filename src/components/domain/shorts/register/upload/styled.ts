import styled, { css } from "styled-components";

export const Form = styled.form``;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    margin-bottom: 32px;

    ${theme.media.desktop} {
      margin-bottom: 40px;
    }
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    margin-bottom: 213px;

    ${theme.media.desktop} {
      margin-bottom: 40px;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-end")};
    gap: 8px;
    width: 100%;
  `};
`;

export const PrevButton = css`
  width: 82px;
`;

export const NextButton = css`
  width: 230px;
`;
