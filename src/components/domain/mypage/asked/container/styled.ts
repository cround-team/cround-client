import styled, { css } from "styled-components";

type WrapperProps = {
  isScroll: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f7f7f7;
  `};
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isScroll }) => css`
    padding: 68px 15px;
    height: ${isScroll ? "60vh" : "auto"};
    overflow-y: ${isScroll ? "scroll" : "initial"};

    ${theme.media.desktop} {
      padding: 60px 24px 15px 24px;
    }
  `};
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    padding: 8px 0;
    border-radius: 12px 12px 0 0;

    ${theme.media.desktop} {
      flex-direction: row;
      gap: 8px;
      padding: 12px 0;
      background: ${theme.colors.white};
      box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.05);
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.title.md};

    ${theme.media.desktop} {
      ${theme.typo.head.sm};
    }
  `};
`;

export const PlatformThemeGroup = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.md};

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;

export const LargeSize = css`
  ${({ theme }) => css`
    width: 93%;
    margin: 0 auto;
    max-width: 1155px;
    textarea {
      min-width: 292px;
      width: 100%;
    }
  `};
`;

export const SmallSize = css`
  ${({ theme }) => css``};
`;
