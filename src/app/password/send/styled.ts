import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    h2 {
      margin-bottom: 30px;
      ${theme.typo.title.lg};
      text-align: center;
      color: ${theme.colors.neutral900};
    }
    span {
      margin-bottom: 4px;
      ${theme.typo.title.sm};
      text-align: center;
      color: ${theme.colors.neutral900};
    }
    p {
      margin-bottom: 30px;
      ${theme.typo.body.md};
      text-align: center;
      color: ${theme.colors.neutral500};
    }
  `};
`;

export const LinkContainer = styled.span`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 10px;

    a {
      padding: 8px 14.5px;
      ${theme.typo.button.sm};
      text-align: center;
      color: ${theme.colors.white};
      border-radius: ${theme.radius.md};

      :first-child {
        ${theme.button.variant.ghost};
      }
      :last-child {
        ${theme.button.variant.primary};
      }
    }
  `};
`;
