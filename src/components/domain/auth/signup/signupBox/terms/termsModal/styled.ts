import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 88.39%;
      max-width: 508px;
    }

    ${theme.media.desktop} {
      width: 508px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding: 16px 8px 16px 24px;
      background-color: ${theme.colors.white};
      backdrop-filter: blur(2px);
      border-radius: ${theme.radius.md};

      h1 {
        margin-bottom: 24px;
        ${theme.typo.title.md};
        text-align: center;
        color: ${theme.colors.neutral900};
      }
    }

    ${theme.media.desktop} {
      padding: 30px 24px 32px 24px;

      h1 {
        margin-bottom: 31px;
        ${theme.typo.title.lg};
      }
    }
  `};
`;

export const ScrollWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      padding-right: 12px;
      overflow-y: auto;
      height: 378px;

      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background-color: ${theme.colors.neutral200};
        border-radius: ${theme.radius.md};
      }

      ::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
      }
    }

    ${theme.media.desktop} {
      height: 479px;
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      h2 {
        ${theme.typo.label.md};
        color: ${theme.colors.neutral900};
      }
      ul {
        margin: 16px 0;
        padding-left: 18px;
      }
      li {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral900};
        list-style-type: disc;
      }
      strong {
        ${theme.typo.label.md};
        color: ${theme.colors.neutral900};
        text-align: center;
      }
    }
  `};
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 24px;
      height: 24px;

      svg {
        width: 16px;
        height: 16px;
        stroke: ${theme.colors.neutral900};
      }
    }

    ${theme.media.desktop} {
      top: 30px;
      right: 24px;
      width: 28px;
      height: 28px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  `};
`;
