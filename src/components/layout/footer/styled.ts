import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      background-color: ${theme.colors.neutral900};
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 24px 20px 8px 20px;
    }
  `};
`;

export const TopWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 24px;
      padding-bottom: 8px;
      border-bottom: 1px solid ${theme.colors.neutral800};
    }
  `};
`;

export const MiddleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
      margin-bottom: 40px;
    }
  `};
`;

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;

      h3 {
        ${theme.typo.label.lg};
        color: ${theme.colors.white};
      }

      ul {
        ${theme.flex.col()};
        gap: 8px;
      }
      ul li {
        ${theme.typo.label.sm};
        color: ${theme.colors.neutral100};
      }
    }
  `};
`;

export const BottomWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;

      div {
        ${theme.flex.row()};
        gap: 32px;
      }
    }
  `};
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral600};
    }
  `};
`;
