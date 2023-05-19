"use client";

import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import * as S from "./styled";
import ContentCard from "@/components/common/card/content/ContentCard";
import { useEffect, useState } from "react";
import { ContentCardData } from "@/types/card";
import { getMainContents } from "@/service/mock/test";

export default function ContentList() {
  const [contents, setContents] = useState<ContentCardData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMainContents();
        setContents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <S.Link href={PATH.CONTENTS}>
        <h2>많은 사람들이 원한 정보들 바로 여기에!</h2>
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {contents?.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
