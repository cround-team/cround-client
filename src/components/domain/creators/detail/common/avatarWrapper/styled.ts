import styled, { css } from "styled-components";

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    img {
      border-radius: 50%;
    }

    ${theme.media.tablet} {
      width: 204px;
      height: 204px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ${theme.media.desktop} {
      width: 230px;
      height: 230px;
    }
  `};
`;
