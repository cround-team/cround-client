export const nameValidCheck = (id: string): boolean => {
  const regex = /^[가-힣]{2,6}$/;
  return regex.test(id);
};

export const emailValidCheck = (email: string): boolean => {
  const regex = /^[^\s<>]+@[^\s<>]+\.[^\s<>]+$/;

  return regex.test(email);
};

export const passwordValidCheck = (pw: string): boolean => {
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  return regex.test(pw);
};

export const nicknameCheck = (nickname: string): boolean => {
  const regex = /^[가-힣a-zA-Z0-9]{2,6}$/;
  return regex.test(nickname);
};

// export const signupValidCheck = (type: string, value: string) => {
//   let regex: RegExp | undefined;
//   switch (type) {
//     case "name":
//       regex = /^[가-힣]{1,6}$/;
//       break;

//     case "email":
//       regex = /^[^\s<>]+@[^\s<>]+\.[^\s<>]+$/;
//       break;

//     case "password":
//       regex =
//         /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
//       break;

//     case "nickname":
//       regex = /^[가-힣a-zA-Z0-9]{2,6}$/;
//       break;
//     default:
//       break;
//   }
//   if (regex) {
//     return regex.test(value);
//   }
//   return false;
// };
