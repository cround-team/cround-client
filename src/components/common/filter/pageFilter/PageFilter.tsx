"use client";

import SortDropdown, { Options } from "../../dropdown/sort/SortDropdown";
import { FilterIcon } from "@/assets/icons";
import { useState } from "react";
import PlatFormModal from "../../modal/platform/PlatFormModal";
import * as S from "./styled";

type PageFilterProps = {
  options: Options[];
};

export default function PageFilter({ options }: PageFilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen((prev) => false);
  };

  return (
    <>
      <S.Container>
        <S.FilterButton onClick={() => handleOpenModal()}>
          <FilterIcon />
        </S.FilterButton>
        <SortDropdown options={options} />
      </S.Container>
      {isModalOpen && <PlatFormModal onCloseModal={handleCloseModal} />}
    </>
  );
}
