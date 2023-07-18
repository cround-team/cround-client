"use client";

import useAskedList from "@/components/domain/mypage/asked/hooks/useAskedList";
import { CreatorAskedList, MenteeAskedList } from "@/components/common";
import * as S from "./styled";
import Link from "next/link";
import { PATH } from "@/constants";

export default function MyAskedPage() {
  const { data } = useAskedList();

  return (
    <S.Section>
      {data &&
        data.map((v, i) => (
          <Link href={`${PATH.MYPAGE.ASKED}/${v.receiver}`}>
            <MenteeAskedList key={i} data={v} />
          </Link>
        ))}
    </S.Section>
  );
}
