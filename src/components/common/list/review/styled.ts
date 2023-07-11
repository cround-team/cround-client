import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    width: 100%;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    width: 100%;
    margin-bottom: 16px;

    ${theme.media.desktop} {
      grid-template-columns: repeat(auto-fit, minmax(585px, 1fr));
      row-gap: 32px;
      column-gap: 30px;
      margin-bottom: 32px;
    }
  `};
`;

export const WriteButton = styled.button`
  ${({ theme }) => css`
    margin-bottom: 16px;
    padding: 4px 8px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary300};
    border-radius: 9px;
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral700};

    ${theme.media.desktop} {
      ${theme.typo.label.lg};
    }
  `};
`;
