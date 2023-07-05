import Link from "next/link";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      background-color: ${theme.colors.white};
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between", "center")};
      padding: 11px 20px 12px 20px;
    }
  `};
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 90px;
      height: 25px;
      a {
        width: 100%;
        height: 100%;
      }
    }
  `};
`;
