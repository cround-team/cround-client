import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      width: 100%;
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
  `};
`;
