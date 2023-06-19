import { useState } from "react";

import { ChevronDownIcon } from "@/assets/icons/arrow";
import { CheckIcon } from "@/assets/icons";
import * as S from "./styled";
import type { Sorts } from "@/types/service";
import { conversionSort } from "@/utils/conversion";

type SortDropdownProps<T extends Sorts> = {
  options: T[];
  onSelectSort: (sorted: string) => void;
};

export default function SortDropdown<T extends Sorts>({
  options,
  onSelectSort,
}: SortDropdownProps<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState<string>(options[0]);

  const handleOpenDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (option: string) => {
    setCurrentSort(option);
    setIsDropdownOpen((prev) => !prev);

    const sort = conversionSort(option);
    onSelectSort(sort);
  };

  return (
    <>
      <S.CurOptionBtn onClick={handleOpenDropdown}>
        {currentSort}
        <ChevronDownIcon />
      </S.CurOptionBtn>

      {/* 드롭다운 */}
      {isDropdownOpen && (
        <S.Form>
          <S.OptionList>
            {options.map((option) => (
              <li key={option}>
                <button onClick={() => handleItemClick(option)}>
                  {currentSort === option && <CheckIcon />}
                  <span>{option}</span>
                </button>
              </li>
            ))}
          </S.OptionList>
        </S.Form>
      )}
    </>
  );
}
