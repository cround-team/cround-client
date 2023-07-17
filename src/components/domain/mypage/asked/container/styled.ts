import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``};
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    padding: 8px 0;
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.title.md};
  `};
`;

export const PlatformThemeGroup = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.md};
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8px 15px;
  `};
`;
