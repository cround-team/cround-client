import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    margin-top: 32px;
    margin-bottom: 66px;
    padding: 0 20px;

    ${theme.media.tablet} {
      margin-top: 40px;
    }

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      margin-top: 72px;
      margin-bottom: 80px;
      padding: 0;
    }
  `};
`;

export const TabsStyles = css`
  ${({ theme }) => css`
    margin-bottom: 24px;

    ${theme.media.desktop} {
      margin-bottom: 32px;
    }
  `};
`;
