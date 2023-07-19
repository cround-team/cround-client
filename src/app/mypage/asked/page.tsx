"use client";

import Link from "next/link";

import useAskedList from "@/components/domain/mypage/asked/hooks/useAskedList";
import { AskedList } from "@/components/common";
import { PATH } from "@/constants";
import * as S from "./styled";

export default function MyAskedPage() {
  const { data } = useAskedList();

  return (
    <S.Section>
      {data &&
        data.map((v, i) => (
          <Link href={`${PATH.MYPAGE.ASKED}/${v.receiver}`}>
            <AskedList key={i} data={v} />
          </Link>
        ))}
    </S.Section>
  );
}
