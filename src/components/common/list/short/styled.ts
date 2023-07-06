import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 16px;
      width: 100%;
    }

    ${theme.media.desktop} {
      gap: 32px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      width: 100%;
    }

    ${theme.media.desktop} {
      gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(585px, 1fr));
    }
  `};
`;
