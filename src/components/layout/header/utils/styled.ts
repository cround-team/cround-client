import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row()};
    gap: 16px;
  `};
`;
