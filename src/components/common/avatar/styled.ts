import styled, { css } from "styled-components";

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.row()};
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
    ${theme.media.desktop} {
      width: 120px;
      height: 120px;
      margin-bottom: 0px;
    }
  `};
`;

export const UploadButton = styled.button`
  ${({ theme }) => css`
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
  `};
`;
