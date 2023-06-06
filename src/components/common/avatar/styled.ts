import styled, { css } from "styled-components";

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;

      img {
        border-radius: 50%;
      }
    }
  `};
`;

export const UploadButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 24px;
      height: 24px;
      background-color: ${theme.colors.white};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 50%;

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.neutral800};
      }
    }
  `};
`;
