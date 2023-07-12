import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 32px auto 40px auto;
    padding: 0 20px;
    max-width: 590px;

    ${theme.media.desktop} {
      margin: 40px auto 80px auto;
      padding: 0;
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;

    ${theme.media.desktop} {
      gap: 40px;
    }
  `};
`;

export const PlatformWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("space-between", "flex-start")};
    gap: 24px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const PlatformList = styled.div`
  ${({ theme }) => css`
    /* ${theme.flex.row()};
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 32.5px; */

    ${theme.flex.row("space-between")};
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 32.5px;

    ${theme.media.desktop} {
      row-gap: 16px;
      column-gap: 16px;
    }
  `};
`;

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 16px;
    width: 100%;
    margin-bottom: 8px;
  `};
`;
