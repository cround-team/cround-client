"use client";

import { SearchMdIcon } from "@/assets/icons";
import * as S from "./styled";

type SearchInputProps = {
  isDisabled: boolean;
  searchKeyword: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  autoFocus?: boolean;
  label: string;
  id?: string;
  name?: string;
  placeholder: string;
};

export default function SearchInput({
  isDisabled,
  autoFocus = false,
  label,
  id = "",
  name = "",
  placeholder,
  onChange,
  onSubmit,
}: SearchInputProps) {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input
        autoFocus={autoFocus}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
      />
      <button disabled={isDisabled}>
        <SearchMdIcon />
      </button>
    </S.Form>
  );
}
