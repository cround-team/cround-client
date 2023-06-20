import Link from "next/link";
import styled, { css } from "styled-components";

import { ChevronRightIcon } from "@/assets/icons";

export const CustomLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("space-between")};
    }
  `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
      gap: 8px;
      ${theme.typo.button.md};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 16px;
      height: 16px;
    }
  `};
`;

export const ChevronIcon = styled(ChevronRightIcon)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.neutral900};
    }
  `};
`;
