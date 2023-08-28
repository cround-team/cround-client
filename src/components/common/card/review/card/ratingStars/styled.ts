import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 4.57px;
  `};
`;
