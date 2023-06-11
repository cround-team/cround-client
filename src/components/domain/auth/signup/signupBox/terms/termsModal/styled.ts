import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 520px;

    ${theme.media.mobile} {
      width: 320px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 35px 30px 30px 30px;
    background-color: ${theme.colors.white};
    backdrop-filter: blur(2px);
    border-radius: ${theme.radius.md};

    h1 {
      margin-bottom: 65px;
      ${theme.typo.title.lg};
      text-align: center;
      color: ${theme.colors.neutral900};
    }

    ${theme.media.mobile} {
      padding: 16px 8px 16px 24px;

      h1 {
        margin-bottom: 24px;
        ${theme.typo.title.md};
      }
    }
  `};
`;

export const ScrollWrapper = styled.div`
  ${({ theme }) => css`
    padding-right: 12px;
    overflow-y: scroll;
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
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
  `};
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 35px;
    right: 8px;
    width: 28px;
    height: 28px;
    ${theme.media.mobile} {
      top: 16px;
      right: 16px;
      width: 24px;
      height: 24px;
    }
  `};
`;
