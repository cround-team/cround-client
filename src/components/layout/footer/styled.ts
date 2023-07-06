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

    ${theme.media.desktop} {
      width: 1200px;
      margin: 0 auto;
      padding: 32px 0;
    }
  `};
`;

export const TopWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 24px;
      padding-bottom: 8px;
      border-bottom: 1px solid ${theme.colors.neutral800};

      svg {
        width: 86px;
        height: 24px;
      }
    }

    ${theme.media.desktop} {
      margin-bottom: 32px;
      padding-bottom: 16px;

      svg {
        width: 140px;
        height: 39px;
      }
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

    ${theme.media.desktop} {
      gap: 48px;
      margin-bottom: 69.94px;
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

    ${theme.media.desktop} {
      gap: 24px;

      h3 {
        ${theme.typo.title.lg};
      }
      ul {
        gap: 16px;
      }
      ul li {
        ${theme.typo.label.lg};
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

        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
    ${theme.media.desktop} {
      div svg {
        width: 48px;
        height: 48px;
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

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;
