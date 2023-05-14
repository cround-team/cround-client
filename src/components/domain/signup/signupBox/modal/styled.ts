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

export const PickWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
  `};
`;

export const PlatformButton = styled.button`
  ${({ theme }) => css`
    /* 추후 수정 필요 (가로, 세로) */
    width: 100px;
    height: 100px;
    padding: 8px 4px;
    background-color: ${theme.colors.white};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: 29.25px;
  `};
`;

export const ThemeButton = styled.button`
  ${({ theme }) => css`
    width: 120px;
    padding: 13px 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.radius.md};
    background-color: ${theme.colors.white};
    ${theme.typo.button.lg};
    color: ${theme.colors.neutral900};
  `};
`;

export const Figure = styled.figure`
  width: 258px;
  height: 258px;
  img {
    width: 100%;
    height: 100%;
  }
`;
