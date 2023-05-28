"use client";

import { useEffect, useState } from "react";

import type { CreatorCardData } from "@/types/card";
import CreatorCard from "@/components/common/card/creator/CreatorCard";
import { getListCreators } from "@/service/mock/test";
import * as S from "./styled";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";

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

  const handleAddList = () => {};

  return (
    <>
      <S.Container>
        {creators?.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </S.Container>
      <MorePageButton isDisabled={false} onClick={handleAddList} />
    </>
  );
}
