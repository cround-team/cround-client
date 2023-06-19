import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 24px;
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;

export const PopularContainer = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 32px;
      ${theme.flex.col()};
      gap: 16px;
    }
  `};
`;

export const BaseContainer = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
      margin-top: 32px;
    }
  `};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 24px;
    }
  `};
`;
