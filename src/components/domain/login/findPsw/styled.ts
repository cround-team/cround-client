import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 16px;
      margin-bottom: 212px;
      a {
        ${theme.flex.row("flex-end")};
        ${theme.typo.button.sm};
        color: ${theme.colors.neutral400};
      }
    }
  `};
`;
