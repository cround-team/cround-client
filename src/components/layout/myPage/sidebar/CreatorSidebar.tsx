import { PATH } from "@/constants";
import * as S from "./styled";
import Link from "next/link";
import { ChevronRightIcon } from "@/assets/icons";
import Image from "next/image";
import { media } from "@/styles/themes/foundations";
import { useAuthContext } from "@/context/AuthContext";

const LIST = [
  [
    {
      label: "질문함",
      path: PATH.MYPAGE.ASKED,
    },
    {
      label: "숏클래스 등록",
      path: PATH.SHORTS.REGISTER,
    },
    {
      label: "콘텐츠 등록",
      path: PATH.CONTENTS.REGISTER,
    },
  ],
  [
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
      path: PATH.MYPAGE.SETTINGS,
    },
  ],
];

export default function CreatorSidebar() {
  const { user } = useAuthContext();

  return (
    <S.Container>
      <S.CreatorLink href={`${PATH.CREATORS.DETAIL}/${user.creatorId}`}>
        <S.Figure>
          <Image
            src={user.profileImage}
            sizes={media.images.sizes}
            fill={true}
            alt="user"
          />
        </S.Figure>
        <S.User>
          <S.Name>{user.name}</S.Name>
          <S.Connect>{user.connectType}</S.Connect>
        </S.User>
        <ChevronRightIcon />
      </S.CreatorLink>
      {LIST.map((v, i) => (
        <S.List key={i}>
          {v.map((el) => (
            <li key={el.label}>
              <Link href={el.path}>{el.label}</Link>
            </li>
          ))}
        </S.List>
      ))}
      <S.List>
        <li>
          <button>로그아웃</button>
        </li>
      </S.List>
    </S.Container>
  );
}