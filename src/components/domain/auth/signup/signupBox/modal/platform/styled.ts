import styled, { css } from "styled-components";

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      text-align: center;
      h2 {
        margin-bottom: 4px;
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
      }
      p {
        ${theme.typo.label.sm};
        color: ${theme.colors.neutral500};
      }
    }

    ${theme.media.desktop} {
      h2 {
        ${theme.typo.title.md};
      }
      p {
        ${theme.typo.title.sm};
      }
    }
  `}
`;
export const Form = styled.form`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 16.5px;
    }
    ${theme.media.desktop} {
      gap: 16px;
    }
  `};
`;

export const PrevButton = styled.button`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 8px;
      left: 16px;
      ${theme.flex.row()};
      width: 24px;
      height: 24px;

      svg {
        width: 24px;
        height: 24px;
        stroke: ${theme.colors.neutral900};
      }
    }

    ${theme.media.desktop} {
      top: 22px;
      left: 24px;
    }
  `};
`;
