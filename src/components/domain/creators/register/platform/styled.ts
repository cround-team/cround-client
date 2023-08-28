import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 24px;
    width: 100%;

    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;
