import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row("flex-start")};
      flex-wrap: wrap;
      gap: 8px;
    }
  `};
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      /* ${theme.flex.row()}; */
      padding: 4px 8px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral300};
      border-radius: 3.5px;
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral500};
    }
  `};
`;
