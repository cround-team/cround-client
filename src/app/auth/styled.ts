import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      height: 100%;
      padding: 16px 20px;
    }
  `};
`;
