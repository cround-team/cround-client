import styled, { css } from "styled-components";

type InputProps = {
  isHidden: boolean;
};

export const Input = styled.input<InputProps>`
  ${({ theme, isHidden }) => css`
    ${theme.media.mobile} {
      display: ${isHidden && "none"};
      :checked + figure img {
        opacity: 1;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15),
          0px 5px 5px rgba(0, 0, 0, 0.15);
      }
      :not(:checked) + figure img {
        opacity: 0.5;
      }
    }
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("space-between")};
      width: 85px;
      height: 105px;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 85px;
      height: 85px;

      img {
        transition: all 0.2s ease-in-out;
        border: 1px solid #d6d6d6;
        border-radius: 18.42px;
        opacity: 0.5;
        cursor: pointer;
      }
    }
  `};
`;
