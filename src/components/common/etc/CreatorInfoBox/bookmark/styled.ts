import styled, { css } from "styled-components";

type ContainerProps = {
  isBookmarked: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isBookmarked }) => css`
    ${theme.flex.row()};
    gap: 4px;

    button {
      svg {
        width: 18px;
        height: 18px;
        stroke: ${isBookmarked
          ? theme.colors.primary200
          : theme.colors.neutral300};
        fill: ${isBookmarked ? theme.colors.primary200 : theme.colors.white};
      }
    }
    span {
      ${theme.typo.label.md};
      color: ${isBookmarked
        ? theme.colors.neutral900
        : theme.colors.neutral300};
    }
  `};
`;
