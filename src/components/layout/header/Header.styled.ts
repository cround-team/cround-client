"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
    h1 {
      font-weight: 900;
      font-size: 24px;
      line-height: 1;
      color: ${theme.colors.primary500};
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between", "center")};
    width: 1200px;
    margin: 0 auto;
    padding: 19px 0;
  `};
`;

export const RightContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 41px;
  `};
`;

export const OauthWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 15px;

    a {
      ${theme.flex.row()};
      width: 72px;
      height: 32px;
      border-radius: ${theme.radius.md};
      ${theme.typo.button.sm};
    }
  `}
`;

export const LoginLink = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary500};
    border: 1px solid ${theme.colors.primary500};
    color: ${theme.colors.white};
  `}
`;

export const SignupLink = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary500};
    color: ${theme.colors.primary500};
  `}
`;

export const Nav = styled.nav``;
