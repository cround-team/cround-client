import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 18px;

    ${theme.media.tablet} {
      gap: 40px;
      max-width: 728px;
      margin-bottom: 24px;
    }

    ${theme.media.desktop} {
      width: 50%;
    }
  `};
`;

export const FollowingButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.size[32]};
    gap: 4px;
    box-sizing: border-box;
    width: 100%;
    ${theme.button.variant.proceeding};

    svg {
      width: 16px;
      height: 16px;
      stroke: ${theme.colors.neutral200};
    }

    ${theme.media.tablet} {
      height: 40px;
      ${theme.typo.button.lg};
    }
  `};
`;

export const CustomButton = css`
  ${({ theme }) => css`
    ${theme.media.tablet} {
      height: 40px;
      ${theme.typo.button.lg};
    }
  `};
`;
