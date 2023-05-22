import NextLink from "next/link";
import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css``};
`;

export const Link = styled(NextLink)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      margin-bottom: 8px;
      h2 {
        ${theme.flex.row()};
        gap: 8px;
        ${theme.typo.button.md};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 16px;
  `};
`;
