"use client";

import { useEffect, useState } from "react";

import type { CreatorCardData } from "@/types/card";
import CreatorCard from "@/components/common/card/creator/Card";
import { getListCreators } from "@/service/mock/test";
import * as S from "./styled";

export default function CreatorList() {
  const [creators, setCreators] = useState<CreatorCardData[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListCreators();
        setCreators(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      {creators?.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} />
      ))}
    </S.Container>
  );
}
