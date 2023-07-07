import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin: 32px 0 64px 0;
    padding: 0 20px;
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 32px;
    width: 100%;
  `};
`;

export const Avatar = css`
  ${({ theme }) => css`
    align-self: center;
    margin-bottom: 0px;
  `};
`;

export const Nickname = css`
  ${({ theme }) => css`
    margin-bottom: 18px;
  `};
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
    width: 100%;
  `};
`;

export const AddInput = css`
  ${({ theme }) => css`
    margin-bottom: 8px;
  `};
`;

export const PlatformList = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 15.5px;
    padding: 16px;
    border: 1px solid ${theme.colors.neutral50};
    border-radius: ${theme.radius.md};
  `};
`;

export const PlatformWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 8px;
  `};
`;
