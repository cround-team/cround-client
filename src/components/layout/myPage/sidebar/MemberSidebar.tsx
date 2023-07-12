import Link from "next/link";

import { PATH } from "@/constants";
import * as S from "./styled";
import { useAuthContext } from "@/context/AuthContext";
import { logoutApi } from "@/utils/api";

const LIST = [
  {
    label: "질문함",
    path: PATH.MYPAGE.ASKED,
  },
  {
    label: "나의 팔로우",
    path: PATH.MYPAGE.FOLLOW,
  },
  {
    label: "나의 북마크",
    path: PATH.MYPAGE.BOOKMARK,
  },
  {
    label: "개인정보 변경",
    path: PATH.MYPAGE.EDIT,
  },
  {
    label: "크리에이터 등록하기",
    path: PATH.CREATORS.REGISTER,
  },
];

export default function MemberSidebar() {
  const { user } = useAuthContext();

  return (
    <S.Container>
      <S.Member>
        <S.Name>{user.nickname}</S.Name>
        <S.Connect>{user.socialLogin ? "소셜 연동" : "이메일 연동"}</S.Connect>
      </S.Member>
      {/*  리스트 부분 */}
      <S.List>
        {LIST.map((el, idx) => (
          <li key={idx}>
            <Link href={el.path}>{el.label}</Link>
          </li>
        ))}
      </S.List>
      <S.List>
        <li>
          <button onClick={() => logoutApi()}>로그아웃</button>
        </li>
      </S.List>
    </S.Container>
  );
}
