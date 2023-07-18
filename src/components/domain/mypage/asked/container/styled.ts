import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``};
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

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 60vh;
    padding: 8px 15px;
    overflow-y: scroll;

    ${theme.media.desktop} {
      padding: 40px 24px 15px 24px;
    }
  `};
`;
