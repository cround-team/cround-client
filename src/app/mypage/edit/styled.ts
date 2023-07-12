import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 590px;
    margin: 32px auto 64px auto;
    padding: 0 20px;

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
    width: 100%;

    ${theme.media.desktop} {
      gap: 40px;
    }
  `};
`;

export const PlatformWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const PlatformList = styled.div`
  ${({ theme }) => css`
    /* ${theme.flex.row("space-between")};
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 15.5px;
    padding: 16px;
    border: 1px solid ${theme.colors.neutral50};
    border-radius: ${theme.radius.md}; */

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
