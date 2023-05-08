import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 520px;
    height: 600px;
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    padding: 35px 30px 30px 30px;
    background-color: ${theme.colors.white};
    backdrop-filter: blur(2px);
    border-radius: ${theme.radius.md};

    h1 {
      margin-bottom: 65px;
      ${theme.typo.title.lg};
      text-align: center;
      color: ${theme.colors.neutral900};
    }

    h2 {
      ${theme.typo.label.md};
      color: ${theme.colors.neutral900};
    }
    p {
      margin: 16px 0;
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 35px;
  right: 8px;
  width: 28px;
  height: 28px;
`;
