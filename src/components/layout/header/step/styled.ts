import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row("space-between")};
    padding: 8px 20px;

    button {
      position: absolute;
      left: 20px;
    }

    h2 {
      position: relative;
      left: 50%;
      transform: translate(-50%);
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;
