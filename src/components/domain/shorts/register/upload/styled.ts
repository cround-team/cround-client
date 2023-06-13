import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
    }
  `};
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 16px;
      margin-bottom: 32px;
    }
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 213px;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const PrevButton = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 82px;
    }
  `};
`;

export const NextButton = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 230px;
    }
  `};
`;
