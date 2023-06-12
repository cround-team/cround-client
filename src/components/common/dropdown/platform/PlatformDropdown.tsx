import React, { useState } from "react";

import { ChevronDownIcon } from "@/assets/icons/arrow";
import ListItem from "./listItem/ListItem";
import * as S from "./styled";

type PlatformDropdownProps = {
  platforms: string[];
  onChange: (selected: string) => void;
};

export default function PlatformDropdown({
  platforms,
  onChange,
}: PlatformDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(platforms[0]);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    onChange(e.target.value);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.DropdownButton type="button" onClick={() => handleToggleDropdown()}>
        <S.Selected>{selected}</S.Selected>
        <ChevronDownIcon />
      </S.DropdownButton>
      {/* 드롭다운 */}
      {isOpen && (
        <S.Dropdown>
          {platforms.map((platform) => (
            <ListItem
              key={platform}
              item={platform}
              isChecked={selected === platform}
              onChange={handleChangeInput}
            />
          ))}
        </S.Dropdown>
      )}
    </S.Container>
  );
}
