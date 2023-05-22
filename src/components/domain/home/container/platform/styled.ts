import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-top: 40px;
      margin-bottom: 44px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.row()};
    }
  `};
`;

export const Figure = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 48px;
      height: 48px;
    }
  `};
`;
