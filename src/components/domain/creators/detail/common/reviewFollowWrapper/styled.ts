import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

    div:first-child {
      padding: 0;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()};
    gap: 8px;
    padding: 8px 0;

    span:first-child {
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
    }

    span:last-child {
      ${theme.typo.body.sm};
      color: ${theme.colors.neutral400};
    }

    :after {
      content: "";
      position: absolute;
      right: 0;
      width: 0px;
      height: 16px;
      border: 1px solid ${theme.colors.neutral100};
    }

    :last-child:after {
      display: none;
    }

    ${theme.media.tablet} {
      gap: 16px;
      padding: 0;

      span:first-child {
        ${theme.typo.title.lg};
      }

      span:last-child {
        ${theme.typo.body.lg};
      }

      :after {
        height: 29.15px;
        border: 2px solid ${theme.colors.neutral100};
      }
    }
  `};
`;
