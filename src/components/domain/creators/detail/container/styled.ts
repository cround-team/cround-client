import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 32px;
      margin-bottom: 66px;
      padding: 0 20px;
    }
  `};
`;
