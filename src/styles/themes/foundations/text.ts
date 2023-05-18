import { css } from "styled-components";

export const text = {
  skip: (line = 3) => css`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `,
};
