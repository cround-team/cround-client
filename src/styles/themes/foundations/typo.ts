import { css } from "styled-components";

export const typo = {
  display: {
    sm: () => css`
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 1.2222;
    `,
    md: () => css`
      font-size: 4.4rem;
      font-weight: 700;
      line-height: 1.1818;
    `,
    lg: () => css`
      font-size: 5.8rem;
      font-weight: 700;
      line-height: 1.1034;
    `,
  },
  head: {
    sm: () => css`
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 1.3333;
    `,
    md: () => css`
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 1.2857;
    `,
    lg: () => css`
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 1.25;
    `,
  },
  title: {
    sm: () => css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.4285;
    `,
    md: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3333;
    `,
    lg: () => css`
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 1.2727;
    `,
  },
  label: {
    sm: () => css`
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4545;
    `,
    md: () => css`
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.5;
    `,
    lg: () => css`
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.5;
    `,
  },
  body: {
    sm: () => css`
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.3333;
    `,
    md: () => css`
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4285;
    `,
    lg: () => css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.5;
    `,
  },
  button: {
    sm: () => css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.1428;
    `,
    md: () => css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.5;
    `,
    lg: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3333;
    `,
    xl: () => css`
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 1.3333;
    `,
  },
};
