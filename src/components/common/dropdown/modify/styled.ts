import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      top: 28px;
      right: 0;
      padding: 8px 16px;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(2.5px);
      border-radius: ${theme.radius.md};
    }
  `};
`;

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};

      li {
        width: 100%;
        padding: 8px 16px;
        border-bottom: 1px solid ${theme.colors.neutral100};

        :last-child {
          border-bottom: 0px;
        }

        button {
          width: 100%;
          ${theme.typo.button.md};
          color: ${theme.colors.neutral900};
        }
      }
    }
  `};
`;
