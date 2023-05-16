import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 360px;
      margin: 0 auto;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 40px 20px 40px 20px;
    }
  `};
`;
