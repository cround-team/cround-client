import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 520px;

    ${theme.media.mobile} {
      width: 320px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 30px 60px;
    background-color: ${theme.colors.white};
    backdrop-filter: blur(2px);
    border-radius: ${theme.radius.md};

    ${theme.media.mobile} {
      gap: 16px;
      padding: 48px 16px 16px 16px;
    }
  `};
`;
