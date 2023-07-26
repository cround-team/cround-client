import styled, { css } from "styled-components";

type MessageHeaderProps = {
  headerColor: "black" | "red";
};

export const Section = styled.section`
  ${({ theme }) => css`
    position: relative;
    background-color: #f7f7f7;
  `};
`;

export const MessageHeader = styled.div<MessageHeaderProps>`
  ${({ theme, headerColor }) => css`
    position: absolute;
    top: 8px;
    right: 50%;
    transform: translate(50%, 0);
    z-index: 10;
    width: 320px;
    margin: 0 auto;
    padding: 10px 0 10px 15px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.5px);

    background-color: ${headerColor === "black" && "rgba(0, 0, 0, 0.65)"};
    background-color: ${headerColor === "red" && "rgba(242, 53, 85, 0.5)"};

    span {
      ${theme.typo.label.md};
      color: ${headerColor === "black" && theme.colors.neutral100};
      color: ${headerColor === "red" && theme.colors.neutral800};

      strong {
        margin-right: 8px;
        ${theme.typo.title.sm};
        color: ${headerColor === "black" && theme.colors.white};
        color: ${headerColor === "red" && theme.colors.neutral900};
      }
    }
  `};
`;

export const CreatorMessageHeader = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 8px;
    right: 50%;
    transform: translate(50%, 0);
    z-index: 10;
    width: 320px;
    margin: 0 auto;
    padding: 10px 0 10px 15px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    background: rgba(242, 53, 85, 0.5);
    backdrop-filter: blur(1.5px);
    span {
      ${theme.typo.label.md};
      color: ${theme.colors.neutral800};
      strong {
        margin-right: 8px;
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
      }
    }
  `};
`;
