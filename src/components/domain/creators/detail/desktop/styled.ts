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
    gap: 55.5px;
    margin-bottom: 48px;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    flex-grow: 1;
    align-items: initial;
  `};
`;

export const BaseReviewFollowGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 354px;
  `};
`;

export const Introduce = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};

    h3 {
      margin-bottom: 16px;
      ${theme.typo.title.lg};
      color: ${theme.colors.neutral900};
    }
    p {
      margin-bottom: 24px;
      ${theme.typo.body.lg};
      color: ${theme.colors.black};
    }
  `};
`;

export const IntroduceWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between", "flex-start")};
    width: 100%;
  `};
`;
