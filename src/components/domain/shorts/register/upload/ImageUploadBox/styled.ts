import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 24px;
    width: 100%;
    background-color: ${theme.colors.white};
    border: 1px dashed ${theme.colors.primary200};
    border-radius: ${theme.radius.md};
    aspect-ratio: 320/170;

    svg {
      width: 40px;
      height: 40px;
      stroke: ${theme.colors.primary500};
    }

    ${theme.media.desktop} {
      width: 590px;
      height: 300px;
      gap: 46px;

      svg {
        width: 72px;
        height: 72px;
      }
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 8px;
    width: 100%;
    max-width: 224px;

    ${theme.media.desktop} {
      gap: 16px;
      max-width: 400px;
    }
  `};
`;

export const Extension = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral200};

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    width: 100%;
  `};
`;

export const TipMessage = styled.p`
  ${({ theme }) => css`
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral300};

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 320/170;
    border-radius: ${theme.radius.md};

    button {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0.7);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      z-index: 1;

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.white};
      }
    }

    img {
      border-radius: ${theme.radius.md};
    }

    ${theme.media.desktop} {
      aspect-ratio: 590/320;
      button {
        top: 24px;
        right: 24px;
        width: 40px;
        height: 40px;

        svg {
          width: 29.5px;
          height: 29.5px;
        }
      }
    }
  `};
`;
