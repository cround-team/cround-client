import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
    }

    ${theme.media.desktop} {
      gap: 48px;
      margin-top: 32px;
    }
  `};
`;

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      width: 100%;
    }

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;
