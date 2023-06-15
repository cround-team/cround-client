import useBookmarkList from "@/hooks/list/useBookmarkList";
import React, { useState } from "react";
import SelectTabs from "../../tab/SelectTabs";
import { ContentCard, ShortCard } from "../../card";
import MorePageButton from "../../button/morePage/MorePageButton";

const TABS = ["숏클래스", "콘텐츠"];

export default function BookmarkPannel() {
  const [selected, setSelected] = useState(TABS[0]);
  const {
    contents,
    shorts,
    isContentNextPage,
    isShortNextPage,
    fetchShortListData,
    fetchContentListData,
  } = useBookmarkList();

  const handleTabClick = (selected: string) => setSelected(selected);

  const handleContentAddList = () => {
    fetchContentListData();
  };

  const handleShortAddList = () => {
    fetchShortListData();
  };

  return (
    <section>
      <SelectTabs tabs={TABS} selected={selected} onTabClick={handleTabClick} />
      <div>
        {selected === "숏클래스" &&
          shorts?.map((short) => (
            <ShortCard key={short.shortsId} short={short} isShowCreatorInfo />
          ))}
        {selected === "콘텐츠" &&
          contents?.map((content) => (
            <ContentCard
              key={content.boardId}
              content={content}
              isShowCreatorInfo
            />
          ))}
      </div>
      {selected === "숏클래스" && (
        <MorePageButton
          isDisabled={!isShortNextPage}
          onClick={handleShortAddList}
        />
      )}
      {selected === "콘텐츠" && (
        <MorePageButton
          isDisabled={!isContentNextPage}
          onClick={handleContentAddList}
        />
      )}
    </section>
  );
}
