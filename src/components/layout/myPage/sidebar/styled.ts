import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 45.83%;
    height: 100vh;
    padding: 0 8px;
    background-color: ${theme.colors.white};

    ${theme.media.desktop} {
      position: absolute;
      top: 47px;
      right: 0px;
      width: 200px;
      height: auto;
      border-radius: ${theme.radius.md};
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
  `};
`;

export const NonMember = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 8px;
    padding: 16px 16px 16px 8px;
    border-bottom: 1px solid ${theme.colors.neutral50};

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const Member = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 4px;
    padding: 18px 0 18px 8px;
    border-bottom: 1px solid ${theme.colors.neutral50};
  `};
`;

export const CreatorLink = styled(Link)`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const User = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 4px;
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.button.sm};
    color: ${theme.colors.neutral900};

    ${theme.media.desktop} {
      ${theme.typo.button.md};
    }
  `};
`;

export const Connect = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral400};
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }

    ${theme.media.desktop} {
      width: 48px;
      height: 48px;
    }
  `};
`;

export const LoginLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.flex.row()};
    ${theme.typo.button.sm};
    color: ${theme.colors.neutral900};

    svg {
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.neutral900};
    }

    ${theme.media.desktop} {
      ${theme.typo.button.md};
    }
  `};
`;

export const List = styled.ul`
  ${({ theme }) => css`
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

    ${theme.media.desktop} {
      li {
        height: 64px;
      }

      li > a,
      li > button {
        ${theme.typo.button.md};
      }
    }
  `};
`;
