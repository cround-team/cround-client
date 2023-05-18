"use client";

import { SearchMdIcon } from "@/assets/icons";
import * as S from "./styled";

type SearchInputProps = {
  autoFocus?: boolean;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  autoFocus = false,
  label,
  id,
  name,
  placeholder,
  onChange,
}: SearchInputProps) {
  return (
    <S.Container>
      <S.Input
        autoFocus={autoFocus}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
      />
      <button>
        <SearchMdIcon />
      </button>
    </S.Container>
  );
}
