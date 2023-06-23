import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
      width: 45.83%;
      height: 100vh;
      padding: 0 8px;
      background-color: ${theme.colors.white};
    }
  `};
`;

export const NonMember = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      gap: 8px;
      padding: 16px 16px 16px 8px;

      border-bottom: 1px solid ${theme.colors.neutral50};
    }
  `};
`;

export const Member = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 4px;
      padding: 18px 0 18px 8px;
      border-bottom: 1px solid ${theme.colors.neutral50};
    }
  `};
`;

export const CreatorLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row("flex-start")};
      gap: 8px;
      width: 100%;
      padding: 16px 0 16px 8px;
      svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral400};
      }
    }
  `};
`;

export const User = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 4px;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Connect = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral400};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 40px;
      height: 40px;
    }
  `};
`;

export const LoginLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      ${theme.typo.button.sm};
      color: ${theme.colors.neutral900};

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.neutral900};
      }
    }
  `};
`;

export const List = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        padding-left: 8px;
      }

      li:last-child {
        border-bottom: 1px solid ${theme.colors.neutral50};
      }

      li:first-child {
        border: 0;
      }

      li > a,
      li > button {
        display: block;
        width: 100%;
        ${theme.typo.button.sm};
        color: ${theme.colors.neutral900};
        text-align: left;
      }
    }
  `};
`;
