import { PATH } from "@/constants";
import { ChevronRightIcon } from "@/assets/icons";
import LoginForm from "./form/LoginForm";
import * as S from "./styled";

export default function LoginBox() {
  return (
    <S.Container>
      <LoginForm />
      <S.FindPasswordLink href={PATH.PASSWORD.FIND}>
        비밀번호 찾기
        <ChevronRightIcon />
      </S.FindPasswordLink>
    </S.Container>
  );
}
