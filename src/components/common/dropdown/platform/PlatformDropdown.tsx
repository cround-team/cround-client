import React, { useEffect, useState } from "react";

import { ChevronDownIcon } from "@/assets/icons/arrow";
import ListItem from "./listItem/ListItem";
import * as S from "./styled";
import { conversionPlatform } from "@/utils/conversion";

type PlatformDropdownProps = {
  platforms: string[];
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PlatformDropdown({
  platforms,
  selected,
  onChange,
}: PlatformDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    isOpen && setIsOpen((prev) => !prev);
  }, [selected]);

  return (
    <S.Container>
      <S.DropdownButton type="button" onClick={() => handleToggleDropdown()}>
        <S.Selected>
          {selected.length === 0 ? "대표 플랫폼 선택" : selected}
        </S.Selected>
        <ChevronDownIcon />
      </S.DropdownButton>
      {/* 드롭다운 */}
      {isOpen && (
        <S.Dropdown>
          {platforms.map((platform) => (
            <ListItem
              key={platform}
              item={platform}
              name="platformHeadType"
              isChecked={selected === conversionPlatform(platform)}
              onChange={onChange}
            />
          ))}
        </S.Dropdown>
      )}
    </S.Container>
  );
}
