import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 520px;
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
  `};
`;

export const TextWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  ${({ theme }) => css`
    h2 {
      ${theme.typo.title.md};
      color: ${theme.colors.neutral900};
    }
    p {
      margin-top: 4px;
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral500};
    }
  `}
`;

export const PrevButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 22px;
    left: 30px;
    ${theme.flex.row()};
    width: 24px;
    height: 24px;
  `};
`;

export const NextButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 8px 0;
    border-radius: ${theme.radius.md};
    background-color: ${theme.colors.primary500};
    ${theme.typo.button.sm};
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    input {
      width: 400px;
      margin-top: 20px;
      margin-bottom: 30px;
      padding: 16px 0 16px 16px;
      border: 1px solid ${theme.colors.neutral100};
      border-radius: ${theme.radius.md};
      background-color: ${theme.colors.white};
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};

      ::placeholder {
        color: ${theme.colors.neutral400};
      }
    }
  `}
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
