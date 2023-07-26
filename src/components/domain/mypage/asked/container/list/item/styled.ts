import styled, { css } from "styled-components";

export const RightContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-end", "flex-end")}
    gap: 8px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const LeftContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start", "flex-end")}
    gap: 8px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 32px;
    height: 32px;
    top: -17px;

    ${theme.media.desktop} {
      top: 0;
      width: 56px;
      height: 56px;
      align-self: flex-start;
    }
  `};
`;

export const RightText = styled.div`
  ${({ theme }) => css`
    width: 200px;
    padding: 8px;
    border-radius: 12px 0px 12px 12px;
    background-color: ${theme.colors.white};
    ${theme.typo.body.sm};
    color: ${theme.colors.black};

    &[aria-current="true"] {
      border: 1px solid ${theme.colors.primary200};
    }

    ${theme.media.desktop} {
      width: 512px;
      ${theme.typo.body.lg};
    }
  `};
`;

export const LeftText = styled.div`
  ${({ theme }) => css`
    width: 200px;
    padding: 8px;
    border-radius: 0px 12px 12px 12px;
    background-color: ${theme.colors.white};
    ${theme.typo.body.sm};
    color: ${theme.colors.black};

    &[aria-current="true"] {
      border: 1px solid ${theme.colors.primary200};
    }

    ${theme.media.desktop} {
      width: 512px;
      ${theme.typo.body.lg};
    }
  `};
`;

export const Time = styled.span`
  ${({ theme }) => css`
    ${theme.typo.body.xs};
    color: ${theme.colors.neutral500};

    ${theme.media.desktop} {
      ${theme.typo.body.md};
    }
  `};
`;

export const TextTimeGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("center", "flex-end")};
    gap: 8px;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;
