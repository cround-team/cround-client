import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      height: 100%;
      padding: 16px 20px;
    }
  `};
`;

export const Social = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const MarginBottom = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 40px;
    }
  `};
`;
