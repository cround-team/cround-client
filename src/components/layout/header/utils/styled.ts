import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 16px;
  `};
`;

// // 데스크탑 (삭제 예정)
// export const Utils = styled.div`
//   ${({ theme }) => css`
//     ${theme.flex.row()};
//     gap: 41px;

//     ${theme.media.mobile} {

//     }
//   `};
// `;

// export const Oauth = styled.div`
//   ${({ theme }) => css`
//     ${theme.flex.row()};
//     gap: 15px;

//     a {
//       ${theme.flex.row()};
//       width: 72px;
//       height: 32px;
//       border-radius: ${theme.radius.md};
//       ${theme.typo.button.sm};
//     }
//   `}
// `;

// export const LoginLink = styled(Link)`
//   ${({ theme }) => css`
//     background-color: ${theme.colors.primary500};
//     border: 1px solid ${theme.colors.primary500};
//     color: ${theme.colors.white};
//   `}
// `;

// export const SignupLink = styled(Link)`
//   ${({ theme }) => css`
//     background-color: ${theme.colors.white};
//     border: 1px solid ${theme.colors.primary500};
//     color: ${theme.colors.primary500};
//   `}
// `;
