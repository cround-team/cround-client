import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    margin-top: 16px;
    margin-bottom: 64px;
    padding: 0 20px;

    ${theme.media.desktop} {
      width: 1200px;
      margin: 40px auto 80px auto;
      padding: 0;
    }
  `};
`;
