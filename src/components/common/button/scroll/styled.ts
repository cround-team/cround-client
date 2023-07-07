import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: ${theme.zIndex.icon};
    padding: 10px 12.5px;
    border-radius: ${theme.radius.md};
    border: 1px solid ${theme.colors.neutral50};
    background-color: ${theme.colors.white};
    box-shadow: 0px 0px 12.5px 0px rgba(0, 0, 0, 0.15);

    svg {
      width: 15px;
      height: 20px;
      stroke: ${theme.colors.neutral500};
    }

    ${theme.media.desktop} {
      right: 20px;
      bottom: 20px;
      padding: 12px 14.5px;

      svg {
        width: 20px;
        height: 25px;
      }
    }
  `};
`;
