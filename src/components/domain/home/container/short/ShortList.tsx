"use client";

import { useEffect, useState } from "react";

import type { ShortCardData } from "@/types/card";
import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import ShortCard from "@/components/common/card/short/ShortCard";
import * as S from "./styled";
import { getMainShorts } from "@/service/mock/test";

export default function ShortList() {
  const [shorts, setShorts] = useState<ShortCardData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMainShorts();
        setShorts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <S.Link href={PATH.SHORTS}>
        <h2>크리에이터가 직접 알려주는 꿀팁!</h2>
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {shorts?.map((short) => (
          <ShortCard key={short.id} short={short} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
