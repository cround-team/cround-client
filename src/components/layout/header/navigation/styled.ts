"use clinet";

import styled, { css } from "styled-components";

type ListProps = {
  isActive: boolean;
};

export const Nav = styled.nav`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ul {
        ${theme.flex.row("flex-start")};
      }
      width: 100%;
      padding-left: 20px;
      background: ${theme.colors.white};
    }

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
    }
  `};
`;
