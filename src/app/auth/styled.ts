import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      margin: 16px auto 50px auto;
      padding: 0 20px;
    }
  `};
`;
