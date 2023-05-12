import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 8px;

  ${({ theme }) => css`
    a {
      ${theme.flex.row("flex-start")};
      gap: 4px;
      ${theme.typo.button.sm};
      color: ${theme.colors.primary500};
    }
  `}
`;
