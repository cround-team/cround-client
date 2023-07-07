import { RatingStarIcon } from "@/assets/icons";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: ${theme.zIndex.modal};
    ${theme.flex.col()};
    width: 88.89%;
    padding: 16px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius.md};
  `};
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 18px;
    right: 16px;
    width: 16px;
    height: 16px;
    svg {
      stroke: ${theme.colors.neutral900};
    }
  `};
`;

export const Head = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 4px;
    width: 100%;
    margin-bottom: 8px;
    h3 {
      ${theme.typo.title.sm};
      color: ${theme.colors.black};
    }
    p {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral700};
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.flex.col()};
    width: 100%;
    gap: 16px;
  `};
`;

export const Rating = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;
    width: 100%;

    button {
      width: 19px;
      height: 18px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  `};
`;

export const FilledStarIcon = styled(RatingStarIcon)`
  ${({ theme }) => css`
    fill: ${theme.colors.rating};
    stroke: ${theme.colors.rating};
  `};
`;

export const EmptyStarIcon = styled(RatingStarIcon)`
  ${({ theme }) => css`
    fill: ${theme.colors.neutral100};
    stroke: ${theme.colors.neutral100};
  `};
`;
