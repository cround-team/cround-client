import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row()};
    width: 100%;
    height: 48px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.neutral50};
    border-radius: ${theme.radius.md};

    span {
      font-size: 16px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.85);
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: absolute;
    left: 16px;
    width: 17.47px;
    height: 18px;
  `};
`;
