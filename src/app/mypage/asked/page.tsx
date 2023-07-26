"use client";

import Link from "next/link";

import useAskedList from "@/components/domain/mypage/asked/hooks/useAskedList";
import { AskedList } from "@/components/common";
import { PATH } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import * as S from "./styled";

export default function MyAskedPage() {
  const { data } = useAskedList();
  const { user } = useAuthContext();

  return (
    <S.Section>
      {data &&
        data.map(
          (v) =>
            user.memberId !== v.receiver && (
              <Link
                href={`${PATH.MYPAGE.ASKED}/${
                  v.receiver === user.memberId ? v.sender : v.receiver
                }`}
                key={v.id}
              >
                <AskedList
                  nickname={v.nickname}
                  text={v.text}
                  updatedDate={v.updatedDate}
                />
              </Link>
            )
        )}
    </S.Section>
  );
}
