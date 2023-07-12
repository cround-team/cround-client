import styled, { css } from "styled-components";

type ContainerProps = {
  isLiked: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isLiked }) => css`
    ${theme.flex.row()};
    gap: 4px;

    button {
      width: 18px;
      height: 18px;

      svg {
        width: 100%;
        height: 100%;
        stroke: ${isLiked ? theme.colors.primary500 : theme.colors.neutral300};
        fill: ${isLiked ? theme.colors.primary500 : theme.colors.white};
      }
    }

    span {
      ${theme.typo.label.md};
      color: ${isLiked ? theme.colors.neutral900 : theme.colors.neutral300};
    }

    ${theme.media.desktop} {
      button {
        width: 24px;
        height: 24px;
      }
      span {
        ${theme.typo.label.lg};
      }
    }
  `};
`;
