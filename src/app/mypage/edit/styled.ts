import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin: 32px 0 64px 0;
      padding: 0 20px;
    }
  `};
`;
