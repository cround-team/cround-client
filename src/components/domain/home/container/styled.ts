import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 64px;
      padding: 0 20px;
    }

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto 80px auto;
      padding: 0;
    }
  `};
`;
