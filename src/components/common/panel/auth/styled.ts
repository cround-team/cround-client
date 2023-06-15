import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      /* margin-bottom: 40px; */
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
