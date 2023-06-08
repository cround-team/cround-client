"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const LinkCard = styled(Link)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: block;
      width: 100%;
      height: 100%;
    }
  `};
`;

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      width: 100%;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
      height: 118px;
      background-color: ${theme.colors.neutral50};
      border-radius: ${theme.radius.md} ${theme.radius.md} 0px 0px;
    }
  `};
`;

export const InfoGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 16px;
      width: 100%;
      padding: 16px;
    }
  `};
`;
