import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.col("center", "space-between")};
    gap: 8px;
    margin-bottom: 32px;
  `};
`;

export const AvatarBaseGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("flex-start")};
    gap: 16px;
  `};
`;
