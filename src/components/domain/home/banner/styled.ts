"use client";
import { Swiper as swiper } from "swiper/react";
import styled, { css } from "styled-components";

export const Swiper = styled(swiper)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
      height: 240px;

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
    }
  `};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      bottom: 32px;
      left: 20px;
    }
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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
    }
  `};
`;

export const Sub = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      white-space: pre-wrap;
      ${theme.typo.body.sm};

      &[aria-label="insta"],
      &[aria-label="youtube"] {
        color: ${theme.colors.neutral50};
      }

      &[aria-label="adPost"] {
        color: ${theme.colors.neutral700};
      }
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
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

      img {
        width: 100%;
        height: 100%;
      }
    }
  `};
`;

export const Pagination = styled.span`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;
    background-color: black;
  `};
`;
