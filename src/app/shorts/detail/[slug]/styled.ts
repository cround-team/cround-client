import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 16px;
      margin-bottom: 64px;
      padding: 0 20px;
    }
  `};
`;

export const Video = css`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 16px;
    }
  `};
`;

export const Platform = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 4px;
      ${theme.typo.body.md};
      color: ${theme.colors.neutral800};
    }
  `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 8px;
      ${theme.typo.title.md};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 8px;
      ${theme.typo.body.md};
      color: ${theme.colors.neutral700};
    }
  `};
`;
