import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 16px;
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;
    }
  `};
`;
