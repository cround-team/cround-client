import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
    }
  `};
`;

export const PrevButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 16px;
      left: 0;
      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 56px 24px 16px 24px;
      border-bottom: 1px solid ${theme.colors.neutral50};
    }
  `};
`;

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
      gap: 30px;
      margin-bottom: 24px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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
      ${theme.flex.col()};
      gap: 4px;
      span {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const RatingFollowGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;

      div {
        ${theme.flex.row()};
        gap: 2px;
      }
      div > span {
        ${theme.typo.label.sm};
        color: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 16px;
    }
  `};
`;
