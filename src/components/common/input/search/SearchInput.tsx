"use client";

import { SearchMdIcon } from "@/assets/icons";
import * as S from "./SearchInput.styled";

type SearchInputProps = {
  label: string;
  placeholder: string;
};

export default function SearchInput({ label, placeholder }: SearchInputProps) {
  return (
    <S.SearchInput>
      <input aria-label={label} placeholder={placeholder} />
      <button>
        <SearchMdIcon />
      </button>
    </S.SearchInput>
  );
}
