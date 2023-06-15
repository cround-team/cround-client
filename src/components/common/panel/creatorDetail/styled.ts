import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 16px;
    }
  `};
`;

export const ReviewWriteBtn = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      align-self: flex-start;
      padding: 4px 8px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary300};
      border-radius: 9px;
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral700};
    }
  `};
`;
