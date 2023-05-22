import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 24px 20px 64px 20px;
    }
  `};
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      margin-bottom: 24px;
    }
  `};
`;
