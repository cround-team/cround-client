import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 400px;
    margin: 0 auto;
    padding: 70px 0 102px 0;

    ${theme.media.mobile} {
      width: 360px;
      margin: 0 auto;
      padding: 40px 20px 32px 20px;
    }
  `};
`;
