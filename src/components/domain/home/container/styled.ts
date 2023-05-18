import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 0 20px;
    }
  `};
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("cetner", "space-between")};
      gap: 8px;
      margin-top: 40px;
    }
  `};
`;
