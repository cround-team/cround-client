import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 430px;
    background-color: ${theme.colors.neutral800};
  `};
`;
