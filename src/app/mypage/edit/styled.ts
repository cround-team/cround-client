import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin: 32px 0 64px 0;
      padding: 0 20px;
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 32px;
    }
  `};
`;

export const PlatformWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      margin-bottom: 8px;
    }
  `};
`;

export const PlatformList = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      flex-wrap: wrap;
      row-gap: 16px;
      column-gap: 15.5px;
      padding: 16px;
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }
  `};
`;
