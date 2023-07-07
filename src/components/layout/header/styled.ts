import Link from "next/link";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between", "center")};
    padding: 11px 20px 12px 20px;

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      padding: 22px 0 23px 0;
    }
  `};
`;

export const Logo = styled.h1`
  width: 90px;
  height: 25px;
  a {
    width: 100%;
    height: 100%;

    svg {
      width: 90px;
      height: 25px;
    }
  }
`;
