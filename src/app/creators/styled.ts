import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    margin-bottom: 64px;
    padding: 0 20px;

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 80px;
      padding: 0;
    }
  `};
`;
