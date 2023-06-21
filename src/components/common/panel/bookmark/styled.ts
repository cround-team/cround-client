import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;
    }
  `};
`;
