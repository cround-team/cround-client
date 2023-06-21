import React, { useState } from "react";

import { useBookmarkList } from "@/hooks";
import { ContentList, ShortsList } from "@/components/domain";
import SelectTabs from "../../tab/SelectTabs";
import * as S from "./styled";

const TABS = ["숏클래스", "콘텐츠"];

export default function BookmarkPannel() {
  const [selected, setSelected] = useState(TABS[0]);
  const { getContentsProps, getShortsProps } = useBookmarkList();

  const handleTabClick = (selected: string) => setSelected(selected);

  return (
    <S.Container>
      <SelectTabs tabs={TABS} selected={selected} onTabClick={handleTabClick} />
      {selected === "숏클래스" && <ShortsList {...getShortsProps()} />}
      {selected === "콘텐츠" && <ContentList {...getContentsProps()} />}
    </S.Container>
  );
}
