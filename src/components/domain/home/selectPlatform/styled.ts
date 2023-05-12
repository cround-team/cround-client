import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 120px;
    background-color: white;
    border-bottom: 1px solid #d2d2d2;
  `};
`;
