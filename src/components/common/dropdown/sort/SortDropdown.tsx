"use client";

import { useState } from "react";

import { ChevronDownIcon } from "@/assets/icons/arrow";
import { CheckBlackIcon } from "@/assets/icons";
import * as S from "./styled";

export type Options = "신규순" | "팔로워순" | "좋아요순" | "북마크순";

type SortDropdownProps<T extends Options> = {
  options: T[];
};

export default function SortDropdown<T extends Options>({
  options,
}: SortDropdownProps<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState<string>(options[0]);

  const handleOpenDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (option: string) => {
    setCurrentSort(option);
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <S.CurOptionBtn onClick={() => handleOpenDropdown()}>
        {currentSort}
        <ChevronDownIcon />
      </S.CurOptionBtn>

      {/* 드롭다운 */}
      {isDropdownOpen && (
        <S.OptionList>
          {options.map((option) => (
            <li key={option}>
              <button onClick={() => handleItemClick(option)}>
                {currentSort === option && <CheckBlackIcon />}
                <span>{option}</span>
              </button>
            </li>
          ))}
        </S.OptionList>
      )}
    </>
  );
}
