import { useState } from "react";

import type { Sorts } from "@/types/service";
import { FilterIcon } from "@/assets/icons";
import { SortDropdown } from "../../dropdown";
import { PlatformModal } from "../../modal";
import * as S from "./styled";

type PageFilterProps = {
  isDisabledPlatform: boolean;
  platforms: string[];
  options: Sorts[];
  onSelectSort: (sorted: string) => void;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFetchData: (id?: number) => void;
};

export default function PageFilter({
  isDisabledPlatform,
  platforms,
  options,
  onSelectSort,
  onChangePlatform,
  onFetchData,
}: PageFilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPlatform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFetchData();
    handleCloseModal();
  };

  return (
    <>
      <S.Container>
        <S.FilterButton onClick={handleOpenModal}>
          <FilterIcon />
        </S.FilterButton>
        <SortDropdown options={options} onSelectSort={onSelectSort} />
      </S.Container>
      {isModalOpen && (
        <PlatformModal
          isDisabledPlatform={isDisabledPlatform}
          platforms={platforms}
          onCloseModal={handleCloseModal}
          onChangePlatform={onChangePlatform}
          onSubmit={handleSubmitPlatform}
        />
      )}
    </>
  );
}
