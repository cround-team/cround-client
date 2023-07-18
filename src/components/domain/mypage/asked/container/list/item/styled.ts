import styled, { css } from "styled-components";

export const MenteeContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-end", "flex-end")}
    gap: 8px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const CreatorContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start", "flex-start")}
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

export const MenteeText = styled.div`
  ${({ theme }) => css`
    width: 200px;
    padding: 8px;
    border-radius: 12px 0px 12px 12px;
    background-color: ${theme.colors.white};
    ${theme.typo.body.sm};
    color: ${theme.colors.black};

    ${theme.media.desktop} {
      width: 512px;
      ${theme.typo.body.lg};
    }
  `};
`;

export const CreatorText = styled.div`
  ${({ theme }) => css`
    width: 200px;
    padding: 8px;
    border: 1px solid ${theme.colors.primary200};
    border-radius: 0px 12px 12px 12px;
    background-color: ${theme.colors.white};
    ${theme.typo.body.sm};
    color: ${theme.colors.black};

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
