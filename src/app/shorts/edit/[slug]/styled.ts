import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 32px 0 40px 0;
    padding: 0 20px;
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
  `};
`;

export const PlatformWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 24px;
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

export const PlatformList = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 32.5px;
  `};
`;
