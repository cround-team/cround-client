import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 590px;
    margin: 32px auto 64px auto;
    padding: 0 20px;

    ${theme.media.desktop} {
      margin: 40px auto 80px auto;
      padding: 0;
    }
  `};
`;
