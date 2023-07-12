"use clinet";

import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      ${theme.flex.row("flex-start")};
    }
    width: 100%;
    padding-left: 20px;
    background: ${theme.colors.white};

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      padding: 0;
    }
  `};
`;
