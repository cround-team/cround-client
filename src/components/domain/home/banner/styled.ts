"use client";
import { Swiper as swiper } from "swiper/react";
import styled, { css } from "styled-components";

export const Swiper = styled(swiper)`
  ${({ theme }) => css`
    .swiper-pagination-clickable .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      margin-right: 8px;
      background-color: ${theme.colors.white};
      opacity: 0.5;
      border-radius: 4px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      width: 16px;
      height: 8px;
      opacity: 1;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    &[aria-label="insta"] {
      background: linear-gradient(
        90deg,
        #4e41e6 0%,
        #993ab5 16.37%,
        #cd4577 52.85%,
        #ed5835 84.35%,
        #eea22c 95.05%,
        #edc767 100.99%
      );
    }
    &[aria-label="youtube"] {
      background-color: #ed2224;
    }
    &[aria-label="adPost"] {
      background-color: #03cf5d;
    }

    span.swiper-pagination-bullet {
      margin: 0 !important;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 240px;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
      height: 260px;
    }

    ${theme.media.tablet} {
      height: 240px;
    }

    @media screen and (min-width: 900px) {
      height: 300px;
    }

    ${theme.media.desktop} {
      width: 1200px;
      height: 320px;
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 32px;
    left: 20px;

    @media screen and (min-width: 600px) {
      bottom: 79px;
    }

    ${theme.media.tablet} {
      bottom: 74px;
      left: 24px;
    }

    @media screen and (min-width: 900px) {
      bottom: 74px;
      left: 20px;
    }

    ${theme.media.desktop} {
      bottom: 69px;
      left: 15px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    white-space: pre-wrap;
    margin-bottom: 4px;
    ${theme.typo.title.lg};
    &[aria-label="insta"],
    &[aria-label="youtube"] {
      color: ${theme.colors.white};
    }

    &[aria-label="adPost"] {
      color: ${theme.colors.neutral900};
    }

    @media screen and (min-width: 600px) {
      margin-bottom: 8px;
      ${theme.typo.head.sm};
    }

    ${theme.media.tablet} {
      margin-bottom: 4px;
      ${theme.typo.title.lg};
    }

    @media screen and (min-width: 900px) {
      margin-bottom: 16px;
      ${theme.typo.display.sm};
    }

    ${theme.media.desktop} {
      margin-bottom: 15px;
      ${theme.typo.display.md};
    }
  `};
`;

export const Sub = styled.p`
  ${({ theme }) => css`
    white-space: pre-wrap;
    ${theme.typo.body.sm};

    &[aria-label="insta"],
    &[aria-label="youtube"] {
      color: ${theme.colors.neutral50};
    }

    &[aria-label="adPost"] {
      color: ${theme.colors.neutral700};
    }

    @media screen and (min-width: 600px) {
      ${theme.typo.body.md};
    }

    ${theme.media.tablet} {
      ${theme.typo.body.sm};
    }

    @media screen and (min-width: 900px) {
      ${theme.typo.title.md};
    }

    ${theme.media.desktop} {
      ${theme.typo.head.sm};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    right: 16px;

    &[aria-label="insta"] {
      width: 136px;
      height: 124px;
    }
    &[aria-label="youtube"] {
      width: 165px;
      height: 130px;
    }
    &[aria-label="adPost"] {
      width: 156px;
      height: 126px;
    }

    @media screen and (min-width: 600px) {
      top: 39px;
      right: 20px;

      &[aria-label="insta"] {
        width: 211px;
        height: 192px;
      }

      &[aria-label="youtube"] {
        width: 225px;
        height: 178px;
      }

      &[aria-label="adPost"] {
        width: 214px;
        height: 172px;
      }
    }

    @media screen and (min-width: 900px) {
      top: 20px;
      right: 20px;

      &[aria-label="insta"] {
        width: 285px;
        height: 260px;
      }
      &[aria-label="youtube"] {
        width: 328px;
        height: 260px;
      }

      &[aria-label="adPost"] {
        width: 326px;
        height: 260px;
      }
    }

    ${theme.media.desktop} {
      top: 14px;
      right: 49px;

      &[aria-label="insta"] {
        width: 318px;
        height: 292px;
      }

      &[aria-label="youtube"] {
        width: 405px;
        height: 320px;
      }

      &[aria-label="adPost"] {
        width: 391px;
        height: 316px;
      }
    }
  `};
`;
