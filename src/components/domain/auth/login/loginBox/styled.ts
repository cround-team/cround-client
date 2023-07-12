import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 16px;
    /* margin-bottom: 212px; */
    margin-bottom: 40px;
  `};
`;

export const FindPasswordLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.flex.row()};
    align-self: flex-end;
    ${theme.typo.button.sm};
    color: ${theme.colors.neutral400};

    svg {
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.neutral400};
    }
  `};
`;
