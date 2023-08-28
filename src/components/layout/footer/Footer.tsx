"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { PATH } from "@/constants";
import {
  CroundLogoIcon,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterTwiterIcon,
} from "@/assets/icons";
import * as S from "./styled";

const SERVICE = [
  {
    label: "크리에이터 목록",
    path: PATH.CREATORS.LIST,
  },
  {
    label: "숏클래스 목록",
    path: PATH.SHORTS.LIST,
  },
  {
    label: "콘텐츠 목록",
    path: PATH.CONTENTS.LIST,
  },
  {
    label: "크리에이터로 참여하기",
    path: PATH.CREATORS.REGISTER,
  },
];

const CROUND = [
  {
    label: "이용약관",
    path: PATH.ROOT,
  },
  {
    label: "개인정보처리방침",
    path: PATH.ROOT,
  },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/password") || pathname.includes("/auth")) return null;

  return (
    <S.Footer>
      <S.Container>
        <S.TopWrapper>
          <Link href={PATH.ROOT}>
            <CroundLogoIcon />
          </Link>
        </S.TopWrapper>
        <S.MiddleWrapper>
          <S.ListWrapper>
            <h3>서비스</h3>
            <ul>
              {SERVICE.map((list) => (
                <li key={list.label}>
                  <Link href={list.path}>{list.label}</Link>
                </li>
              ))}
            </ul>
          </S.ListWrapper>
          <S.ListWrapper>
            <h3>크라운드</h3>
            <ul>
              {CROUND.map((list) => (
                <li key={list.label}>
                  <Link href={list.path}>{list.label}</Link>
                </li>
              ))}
            </ul>
          </S.ListWrapper>
        </S.MiddleWrapper>
        <S.BottomWrapper>
          <div>
            <FooterTwiterIcon />
            <FooterInstagramIcon />
            <FooterFacebookIcon />
          </div>
          <S.Copyright>copyright Cround. All rights reserved.</S.Copyright>
        </S.BottomWrapper>
      </S.Container>
    </S.Footer>
  );
}
