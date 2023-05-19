import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 40px;
      padding: 0 20px;
    }
  `};
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("cetner", "space-between")};
      gap: 24px;
      margin-top: 24px;
    }
  `};
`;

export const CreatorWrapper = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;
    }
  `};
`;
