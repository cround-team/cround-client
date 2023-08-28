import styled, { css } from "styled-components";

type ContainerProps = {
  isMargin: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isMargin }) => css`
    position: relative;
    ${theme.flex.col()};
    gap: 28px;
    width: 100%;
    ${isMargin && "margin-bottom: 40px"};
    padding: 40px 0;
    border-top: 1px solid ${theme.colors.neutral100};

    ${theme.media.desktop} {
      gap: 40px;
      ${isMargin && "margin-bottom: 48px"};
    }
  `};
`;

export const Date = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 50%;
    z-index: 1;
    transform: translate(50%, -50%);
    padding: 0 8px;
    background-color: #f7f7f7;
    ${theme.typo.body.sm};
    color: ${theme.colors.neutral500};

    ${theme.media.desktop} {
      ${theme.typo.body.lg};
    }
  `};
`;
