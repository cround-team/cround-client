import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 360px;
      margin: 0 auto;
      padding: 40px 20px 16px 20px;
    }
  `};
`;
