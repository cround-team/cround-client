import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    h3 {
      margin-bottom: 4px;
      ${theme.typo.title.lg};
      color: ${theme.colors.neutral900};
    }

    p {
      margin-bottom: 68px;
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral600};
    }
  `};
`;

export const Figure = styled.figure`
  position: relative;
  margin-bottom: 120px;
  width: 323px;
  height: 260px;
`;
