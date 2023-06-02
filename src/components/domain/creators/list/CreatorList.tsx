"use client";

import { useEffect, useState } from "react";

// import type { CreatorCardData } from "@/types/card";
import CreatorCard from "@/components/common/card/creator/CreatorCard";
import { getListCreators } from "@/service/mock/test";
import * as S from "./styled";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";
import TestCreator from "./TestCreator";

import type { CreatorCardData } from "@/types/card";

export default function CreatorList({ data }: any) {
  const handleAddList = () => {};
  console.log("data", data);
  return (
    <>
      <S.Container>
        {data.map((creator: CreatorCardData) => (
          <CreatorCard key={creator.creatorId} creator={creator} />
        ))}
      </S.Container>
      <MorePageButton isDisabled={false} onClick={handleAddList} />
    </>
  );
}
