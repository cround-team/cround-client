import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: 70px 0;
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 100%;
    margin: 0 auto;
  `};
`;
