import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "space-between")};
      gap: 8px;
    }
  `};
`;

export const TopWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      gap: 16px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  `};
`;

export const ProfileText = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
    }
  `};
`;

export const Nickname = styled.h3`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.title.md};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const PlatformThemeGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 4px;
      span {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral800};
      }
    }
  `};
`;

export const MiddleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      div {
        position: relative;
        ${theme.flex.col()};
        gap: 8px;
        padding: 8px 0;

        span:first-child {
          ${theme.typo.label.lg};
          color: ${theme.colors.neutral900};
        }

        span:last-child {
          ${theme.typo.body.sm};
          color: ${theme.colors.neutral400};
        }
      }
      div:after {
        content: "";
        position: absolute;
        right: 0;
        width: 0px;
        height: 16px;
        border: 1px solid ${theme.colors.neutral100};
      }
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 18px;
    }
  `};
`;
