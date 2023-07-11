import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "flex-start")};
    gap: 24px;
    width: 320px;
    margin: 0 auto;

    ${theme.media.desktop} {
      width: 590px;
      gap: 16px;
    }
  `};
`;
