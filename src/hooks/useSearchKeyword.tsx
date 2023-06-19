import { useState } from "react";

export default function useSearchKeyword() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searched, setSearched] = useState("");

  const isDisabledSearch = !searchKeyword;

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearched = () => setSearched(searchKeyword);

  return {
    isDisabledSearch,
    searched,
    searchKeyword,
    handleSearched,
    handleChangeKeyword,
  };
}
