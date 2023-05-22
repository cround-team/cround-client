"use client";

import SortDropdown, { Options } from "../../dropdown/sort/SortDropdown";
import { FilterIcon } from "@/assets/icons";
import * as S from "./styled";
import { useState } from "react";
import PlatFormModal from "../../modal/platform/PlatFormModal";

type PageFilterProps = {
  options: Options[];
};

export default function PageFilter({ options }: PageFilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <S.Container>
        <button onClick={() => handleOpenModal()}>
          <FilterIcon />
        </button>
        <SortDropdown options={options} />
      </S.Container>
      {isModalOpen && <PlatFormModal />}
    </>
  );
}
