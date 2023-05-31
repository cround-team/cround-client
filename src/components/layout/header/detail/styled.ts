import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.row()};

      button {
        position: absolute;
        left: 20px;
      }

      h2 {
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;