import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    width: 728px;
    margin-bottom: 24px;
  `};
`;

export const BaseReviewFollowGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 23.71px;
    flex-grow: 1;
  `};
`;
