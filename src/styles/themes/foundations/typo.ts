import { css } from "styled-components";

export const typo = {
  display: {
    sm: () => css`
      font-size: 3.6rem;
      font-weight: 700;
      /* line-height: 1.2222; */
      line-height: 4.4rem;
    `,
    md: () => css`
      font-size: 4.4rem;
      font-weight: 700;
      /* line-height: 1.1818; */
      line-height: 5.2rem;
    `,
    lg: () => css`
      font-size: 5.8rem;
      font-weight: 700;
      /* line-height: 1.1034; */
      line-height: 6.4rem;
    `,
  },
  head: {
    sm: () => css`
      font-size: 2.4rem;
      font-weight: 700;
      /* line-height: 1.3333; */
      line-height: 3.2rem;
    `,
    md: () => css`
      font-size: 2.8rem;
      font-weight: 700;
      /* line-height: 1.2857; */
      line-height: 3.6rem;
    `,
    lg: () => css`
      font-size: 3.2rem;
      font-weight: 700;
      /* line-height: 1.25; */
      line-height: 4rem;
    `,
  },
  title: {
    sm: () => css`
      font-size: 1.4rem;
      font-weight: 700;
      /* line-height: 1.4285; */
      line-height: 2rem;
    `,
    md: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      /* line-height: 1.3333; */
      line-height: 2.4rem;
    `,
    lg: () => css`
      font-size: 2.2rem;
      font-weight: 700;
      /* line-height: 1.2727; */
      line-height: 2.8rem;
    `,
  },
  label: {
    sm: () => css`
      font-size: 1.1rem;
      font-weight: 600;
      /* line-height: 1.4545; */
      line-height: 1.6rem;
    `,
    md: () => css`
      font-size: 1.2rem;
      font-weight: 600;
      /* line-height: 1.5; */
      line-height: 1.6rem;
    `,
    lg: () => css`
      font-size: 1.6rem;
      font-weight: 600;
      /* line-height: 1.5; */
      line-height: 2.4rem;
    `,
  },
  body: {
    xs: () => css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
    `,
    sm: () => css`
      font-size: 1.2rem;
      font-weight: 400;
      /* line-height: 1.3333; */
      line-height: 1.6rem;
    `,
    md: () => css`
      font-size: 1.4rem;
      font-weight: 400;
      /* line-height: 1.4285; */
      line-height: 2rem;
    `,
    lg: () => css`
      font-size: 1.6rem;
      font-weight: 400;
      /* line-height: 1.5; */
      line-height: 2.4rem;
    `,
  },
  button: {
    sm: () => css`
      font-size: 1.4rem;
      font-weight: 700;
      /* line-height: 1.1428; */
      line-height: 1.6rem;
    `,
    md: () => css`
      font-size: 1.6rem;
      font-weight: 700;
      /* line-height: 1.5; */
      line-height: 2.4rem;
    `,
    lg: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      /* line-height: 1.3333; */
      line-height: 2.4rem;
    `,
    xl: () => css`
      font-size: 2.4rem;
      font-weight: 700;
      /* line-height: 1.3333; */
      line-height: 3.2rem;
    `,
  },
};
