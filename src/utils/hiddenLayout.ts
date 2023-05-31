import { PATH } from "@/constants";

export default function isFooterHidden(pathname: string) {
  const hiddenPaths = [
    PATH.LOGIN,
    PATH.SIGNUP,
    PATH.PASSWORD.FIND,
    PATH.PASSWORD.NEW,
    PATH.PASSWORD.SEND,
  ];

  return !hiddenPaths.some((path) => pathname.includes(path));
}
