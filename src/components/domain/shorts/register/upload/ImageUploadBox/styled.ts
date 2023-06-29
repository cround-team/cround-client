import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
      width: 100%;
      padding: 27px 48px 12px 48px;
      background-color: ${theme.colors.white};
      border: 1px dashed ${theme.colors.primary200};
      border-radius: ${theme.radius.md};

      svg {
        width: 40px;
        height: 40px;
        stroke: ${theme.colors.primary500};
      }
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const Extension = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral200};
    }
  `};
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      width: 100%;
    }
  `};
`;

export const TipMessage = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral300};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 320px;
      height: 170px;
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
    }
  `};
`;
