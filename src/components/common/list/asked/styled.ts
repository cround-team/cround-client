import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start", "flex-start")};
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 44px 16px 20px;
    border-bottom: 1px solid ${theme.colors.neutral50};

    ${theme.media.desktop} {
      gap: 16px;
      padding: 24px 64px 24px 16px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    image {
      border-radius: 50%;
    }

    ${theme.media.desktop} {
      width: 68px;
      height: 68px;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    flex: 1;
  `};
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-bottom: 8px;
    ${theme.typo.body.sm};
    color: ${theme.colors.black};
    ${theme.text.skip(1)};

    ${theme.media.desktop} {
      ${theme.typo.body.md};
      ${theme.text.skip(2)};
    }
  `};
`;

export const Time = styled.span`
  ${({ theme }) => css`
    ${theme.typo.body.sm};
    color: ${theme.colors.neutral500};

    ${theme.media.desktop} {
      ${theme.typo.body.sm};
    }
  `};
`;
