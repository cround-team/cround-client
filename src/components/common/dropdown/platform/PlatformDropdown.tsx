import React, { useState } from "react";

import { ChevronDownIcon } from "@/assets/icons/arrow";
import ListItem from "./listItem/ListItem";
import * as S from "./styled";

const PLATFORMS = ["유튜브", "트위치", "팟캐스트", "아프리카 TV"];

export default function PlatformDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(PLATFORMS[0]);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
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
          {PLATFORMS.map((platform) => (
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
