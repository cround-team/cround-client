import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;
