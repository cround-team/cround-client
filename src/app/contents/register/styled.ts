import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    max-width: 590px;
    margin: 32px auto 64px auto;
    padding: 0 20px;

    ${theme.media.desktop} {
      padding: 0;
    }
  `};
`;
