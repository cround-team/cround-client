import Link from "next/link";
import styled, { css } from "styled-components";

import { ChevronRightIcon } from "@/assets/icons";

export const CustomLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
  `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;
    ${theme.typo.button.md};
    color: ${theme.colors.neutral900};

    ${theme.media.tablet} {
      ${theme.typo.button.lg};
    }

    ${theme.media.desktop} {
      ${theme.typo.button.xl};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 16px;
    height: 16px;

    ${theme.media.tablet} {
      width: 20px;
      height: 20px;
    }

    ${theme.media.desktop} {
      width: 32px;
      height: 32px;
    }
  `};
`;

export const ChevronIcon = styled(ChevronRightIcon)`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    stroke: ${theme.colors.neutral900};

    ${theme.media.tablet} {
      width: 24px;
      height: 24px;
    }

    ${theme.media.desktop} {
      width: 32px;
      height: 32px;
    }
  `};
`;
