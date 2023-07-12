import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    width: 100%;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
  `};
`;

export const BaseReviewFollowGroup = styled.div`
  ${({ theme }) => css``};
`;
