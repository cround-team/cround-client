import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
      margin-top: 24px;
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;
