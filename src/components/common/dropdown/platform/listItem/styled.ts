import { SelectBoxIcon } from "@/assets/icons";
import styled, { css } from "styled-components";

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.neutral50};

    :last-child {
      border-bottom: 0px;
    }
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    width: 100%;
    padding: 12px 0;
    cursor: pointer;

    span {
      ${theme.typo.body.md};
      color: ${theme.colors.neutral900};
    }

    ${theme.media.desktop} {
      padding: 16px 0;

      span {
        ${theme.typo.body.lg};
      }
    }
  `};
`;

export const Input = styled.input`
  display: none;
`;

export const SelectBox = styled(SelectBoxIcon)`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    fill: ${theme.colors.neutral50};

    rect {
      width: 24px;
      height: 24px;
    }
    &[aria-checked="true"] {
      fill: ${theme.colors.primary500};
    }
  `};
`;
