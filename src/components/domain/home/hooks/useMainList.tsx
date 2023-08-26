import { useEffect } from "react";
import { useImmer } from "use-immer";

import type { ContentCardData, ShortCardData, CreatorCardData } from "@/types";
import {
  creatorsCustomApi,
  contentsApi,
  shortsApi,
  creatorsApi,
} from "@/utils/api";
import { useSearchKeyword } from "@/hooks";

type CustomCreators = {
  latest: CreatorCardData[];
  interest: CreatorCardData[];
};

const INITIAL_CREATORS = [
  {
    creatorId: 0,
    description: "",
    creatorNickname: "",
    platformType: "",
    profileImage: "",
    platformTheme: "",
  },
];

const INITIAL_CUSTOM_CREATORS = {
  latest: INITIAL_CREATORS,
  interest: INITIAL_CREATORS,
};

const INITIAL_CONTENTS = [
  {
    author: "",
    boardId: 0,
    content: "",
    platformType: "",
    profileImage: "",
    title: "",
  },
];

const INITIAL_SHORTS = [
  {
    shortsId: 0,
    title: "",
    thumbnailUrl: "/images/profile.png",
    platformType: "",
    profileImage: "",
    author: "",
  },
];

export default function useMainList() {
  const [creators, setCreators] = useImmer<CreatorCardData[]>(INITIAL_CREATORS);
  const [contents, setContents] = useImmer<ContentCardData[]>(INITIAL_CONTENTS);
  const [shorts, setShorts] = useImmer<ShortCardData[]>(INITIAL_SHORTS);

  const {
    isDisabledSearch,
    searched,
    searchKeyword,
    handleSearched,
    handleChangeKeyword,
  } = useSearchKeyword();

  useEffect(() => {
    // fetchCustomCreatorList();
    fetchShortList();
    fetchContentList();
  }, []);

  // const fetchCustomCreatorList = async () => {
  //   try {
  //     const params = { size: 12 };
  //     const response = await creatorsCustomApi(params);
  //     setCustomCreators((draft) => {
  //       draft.latest = response.data.latestCreators;
  //       draft.interest = response.data.interestCreators;
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchCreatorList = async () => {
    try {
      const params = {
        size: 12,
        keyword: searchKeyword,
      };
      const response = await creatorsApi(params);
      setCreators(response.data.pages);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const fetchContentList = async () => {
    try {
      const params = {
        size: 6,
        keyword: searchKeyword,
      };
      const response = await contentsApi(params);
      setContents(response.data.pages);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const fetchShortList = async () => {
    try {
      const params = {
        size: 6,
        keyword: searchKeyword,
      };
      const response = await shortsApi(params);
      setShorts(response.data.pages);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const handleSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCreatorList();
    fetchShortList();
    fetchContentList();
  };

  // const getLatestCreatorListProps = ({ ...otherProps } = {}) => ({
  //   data: customCreators.latest,
  //   ...otherProps,
  // });

  // const getInterestCreatorListProps = ({ ...otherProps } = {}) => ({
  //   data: customCreators.interest,
  //   ...otherProps,
  // });

  const getCreatorListProps = ({ ...otherProps } = {}) => ({
    data: creators,
    ...otherProps,
  });

  const getShortListProps = ({ ...otherProps } = {}) => ({
    data: shorts,
    ...otherProps,
  });

  const getContentListProps = ({ ...otherProps } = {}) => ({
    data: contents,
    ...otherProps,
  });

  const getSearchProps = ({ ...otherProps } = {}) => ({
    isDisabled: isDisabledSearch,
    searchKeyword,
    onChange: handleChangeKeyword,
    onSubmit: handleSubmitKeyword,
    ...otherProps,
  });

  return {
    searched,
    // getLatestCreatorListProps,
    // getInterestCreatorListProps,
    getCreatorListProps,
    getShortListProps,
    getContentListProps,
    getSearchProps,
  };
}
