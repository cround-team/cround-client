"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const LinkCard = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Article = styled.article`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 585px;
    max-height: 190.5px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.neutral50};
    border-radius: ${theme.radius.md};

    ${theme.media.desktop} {
      border-radius: 14px;
    }
  `};
`;

export const InfoGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("space-between", "flex-start")};
    gap: 16px;
    padding: 16px;
    height: 100%;

    ${theme.media.desktop} {
      gap: 19px;
      padding: 19px;
    }
  `};
`;

export const TitleGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 4px;

    span {
      ${theme.typo.body.md};
      color: ${theme.colors.neutral900};
    }
    h3 {
      ${theme.typo.title.md};
      color: ${theme.colors.neutral900};
      ${theme.text.skip(2)};
    }

    p {
      ${theme.typo.body.md};
      color: ${theme.colors.neutral900};
      ${theme.text.skip(2)};
    }

    ${theme.media.desktop} {
      gap: 4.75px;

      span {
        ${theme.typo.body.lg}
      }

      h3 {
        ${theme.typo.title.lg};
      }

      p {
        ${theme.typo.body.lg};
      }
    }
  `};
`;
