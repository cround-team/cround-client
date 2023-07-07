import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 32px;
    margin-top: 32px;
    margin-bottom: 66px;
    padding: 0 20px;
  `};
`;
