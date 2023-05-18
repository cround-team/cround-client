import { css } from "styled-components";

export const text = {
  skip: (height = "40px") => css`
    width: 100%;
    height: ${height};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `,
};
