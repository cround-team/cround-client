import type { Filter, Sorts } from "@/types";
import { useImmer } from "use-immer";

const CONTENT_OPTIONS: Sorts[] = ["신규순", "좋아요순", "북마크순"];
const SHORT_OPTIONS: Sorts[] = ["신규순", "좋아요순", "북마크순"];
const CREATOR_OPTIONS: Sorts[] = ["신규순", "팔로워순", "리뷰순"];

const INITIAL_FILTER: Filter = {
  platforms: [],
  sort: "latest",
};

export default function useListFilter() {
  const [filter, setFilter] = useImmer<Filter>(INITIAL_FILTER);
  const isDisabledPlatform = !(filter.platforms.length > 0);

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const checkedList = checked
      ? [...filter.platforms, value]
      : filter.platforms.filter((v) => v !== value);

    setFilter((draft) => {
      draft.platforms = checkedList;
    });
  };

  // 리팩토링 되어야함.
  const handleChangeSort = (selected: string) => {
    setFilter((draft) => {
      draft.sort = selected;
    });
  };

  return {
    isDisabledPlatform,
    contentOptions: CONTENT_OPTIONS,
    shortOptions: SHORT_OPTIONS,
    creatorOptions: CREATOR_OPTIONS,
    filter,
    handleChangePlatform,
    handleChangeSort,
  };
}
