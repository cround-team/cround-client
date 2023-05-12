import Link from "next/link";
import * as S from "./styled";

export type StyledListProps = {
  isActive: boolean;
};

type SelectLinkProps = {
  currentLink: "signup" | "login";
};

export default function SelectLink({ currentLink }: SelectLinkProps) {
  return (
    <S.ListContainer>
      <S.List isActive={currentLink === "login"}>
        <Link href="/login">로그인</Link>
      </S.List>
      <S.List isActive={currentLink === "signup"}>
        <Link href="/signup">회원가입</Link>
      </S.List>
    </S.ListContainer>
  );
}
