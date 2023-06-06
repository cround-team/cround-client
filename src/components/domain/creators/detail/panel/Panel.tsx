import { useEffect, useState } from "react";

import type {
  ContentCardData,
  ReviewCardData,
  ShortCardData,
} from "@/types/card";
import {
  getMainContents,
  getMainShorts,
  getReviews,
} from "@/service/mock/test";
import SelectTabs from "@/components/common/tab/SelectTabs";
import ShortCard from "@/components/common/card/short/ShortCard";
import ContentCard from "@/components/common/card/content/ContentCard";
import ReviewCard from "@/components/common/card/review/card/ReviewCard";
import * as S from "./styled";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";

const TABS = ["숏클래스", "콘텐츠", "리뷰"];

export default function Panel() {
  const [selected, setSelected] = useState(TABS[0]);
  const [shorts, setShorts] = useState<ShortCardData[]>();
  const [contents, setContents] = useState<ContentCardData[]>();
  const [reviews, setReviews] = useState<ReviewCardData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shorts = await getMainShorts();
        const contents = await getMainContents();
        const reviews = await getReviews();
        setShorts(shorts);
        setContents(contents);
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (selected: string) => {
    setSelected(selected);
  };

  const handleMorePage = () => {};

  return (
    <S.Section>
      <SelectTabs tabs={TABS} selected={selected} onTabClick={handleTabClick} />
      <S.Wrapper>
        {selected === "숏클래스" &&
          shorts?.map((short) => (
            <ShortCard key={short.id} short={short} isShowCreatorInfo />
          ))}
        {selected === "콘텐츠" &&
          contents?.map((content) => (
            <ContentCard key={content.id} content={content} isShowCreatorInfo />
          ))}
        {selected === "리뷰" && (
          <>
            <S.ReviewWriteBtn>리뷰 작성하기</S.ReviewWriteBtn>
            {reviews?.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                content={review.content}
              />
            ))}
          </>
        )}
      </S.Wrapper>
      <MorePageButton
        isDisabled={false}
        label="더보기"
        onClick={handleMorePage}
      />
    </S.Section>
  );
}
