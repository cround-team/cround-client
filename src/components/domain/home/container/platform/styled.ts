import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding-top: 40px;
      padding-bottom: 20px;
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
