import NextLink from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      flex-wrap: wrap;
      gap: 16px;
      width: 100%;
      margin-top: 24px;
    }
  `};
`;
