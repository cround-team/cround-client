import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    width: 100%;
  `};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    padding: 12px 0;
    border-bottom: 1px solid ${theme.colors.neutral100};
    ${theme.typo.title.sm};
    text-align: center;
    color: ${theme.colors.neutral200};

    ${theme.media.mobile} {
      display: none;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 20px;
    width: 100%;

    ${theme.media.mobile} {
      flex-direction: column-reverse;
      gap: 10px;
    }
  `};
`;
