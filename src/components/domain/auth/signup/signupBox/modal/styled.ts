import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 320px;

    ${theme.media.desktop} {
      width: 508px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 48px 16px 16px 16px;
    background-color: ${theme.colors.white};
    backdrop-filter: blur(2px);
    border-radius: ${theme.radius.md};

    ${theme.media.desktop} {
      gap: 24px;
      padding: 70px 48px 24px 60px;
    }
  `};
`;
