import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 400px;

    background: linear-gradient(
      90deg,
      #4e41e6 0%,
      #993ab5 16.37%,
      #cd4577 52.85%,
      #ed5835 84.35%,
      #eea22c 95.05%,
      #edc767 100.99%
    );

    ${theme.media.mobile} {
      height: 240px;
    }
  `};
`;
export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 1200px;
    margin: 0 auto;

    ${theme.media.mobile} {
      width: 100%;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 124px;
    left: 15px;
    h2 {
      margin-bottom: 15px;
      ${theme.typo.display.md};
      color: ${theme.colors.white};
    }

    p {
      ${theme.typo.head.sm};
      color: ${theme.colors.neutral50};
    }

    ${theme.media.mobile} {
      top: 114px;
      left: 20px;

      h2 {
        margin-bottom: 4px;
        ${theme.typo.title.lg};
      }

      p {
        ${theme.typo.body.sm};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: absolute;
    top: 14px;
    right: 6px;
    width: 404px;
    height: 372px;

    ${theme.media.mobile} {
      top: 18px;
      right: 26px;
      width: 117px;
      height: 112px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  `};
`;
