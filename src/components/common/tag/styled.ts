import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    flex-wrap: wrap;
    gap: 8px;

    ${theme.media.desktop} {
      width: 50%;
    }
  `};
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    padding: 4px 8px;
    background-color: #f7f7f7;
    border-radius: 3.5px;
    ${theme.typo.body.sm};
    color: ${theme.colors.neutral500};

    ${theme.media.tablet} {
      ${theme.typo.body.md};
    }
  `};
`;
