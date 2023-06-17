"use client";

import Image from "next/image";
import userImg from "public/images/user.png";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import Link from "next/link";
import { PATH } from "@/constants";

const MY_PAGE = [
  {
    label: "질문함",
    path: PATH.ROOT,
  },
  {
    label: "나의 팔로우",
    path: PATH.ROOT,
  },
  {
    label: "나의 북마크",
    path: PATH.ROOT,
  },
  {
    label: "개인정보 변경",
    path: PATH.ROOT,
  },
  {
    label: "크리에이터 등록하기",
    path: PATH.ROOT,
  },
];

export default function MyPageSidebar() {
  return (
    <>
      <S.Test />
      <S.Aside>
        <S.User>
          <S.Figure>
            <Image
              src={userImg}
              sizes={media.images.sizes}
              fill={true}
              alt="user"
            />
          </S.Figure>
          <S.NameLoginTypeGroup>
            <S.Name>코코</S.Name>
            <S.LoginType>카카오 연동</S.LoginType>
          </S.NameLoginTypeGroup>
        </S.User>
        <S.List>
          {MY_PAGE.map((page, idx) => (
            <li key={idx}>
              <Link href={page.path}>{page.label}</Link>
            </li>
          ))}
        </S.List>
        <S.List>
          <li>
            <button>로그아웃</button>
          </li>
        </S.List>
      </S.Aside>
    </>
  );
}
