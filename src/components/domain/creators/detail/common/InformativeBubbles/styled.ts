import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    ${theme.flex.col()};
    gap: 23px;
    margin-top: 16px;
    width: 100%;
    svg {
      width: 20px;
      height: 20px;
      stroke: ${theme.colors.neutral900};
    }
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.flex.col()};
    gap: 8px;
    width: 100%;
    padding: 24px 0;
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    border-radius: ${theme.radius.md};
    text-align: center;

    ::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      border-top: 18px solid white;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 0px solid transparent;
    }
    p {
      ${theme.typo.title.sm};
      color: ${theme.colors.neutral900};
    }

    a {
      ${theme.typo.button.md};
      ${theme.colors.black};
    }
  `};
`;
