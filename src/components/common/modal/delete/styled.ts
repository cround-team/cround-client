import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 25%;
    right: 50%;
    transform: translate(50%, 0%);
    z-index: ${theme.zIndex.modal};
    ${theme.flex.col()};
    width: 74.44%;
    padding: 16px 20px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius.md};

    h3 {
      margin-bottom: 8px;
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral900};
    }
    p {
      margin-bottom: 24px;
      ${theme.typo.body.md};
      color: ${theme.colors.neutral700};
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;
    width: 100%;
  `};
`;
