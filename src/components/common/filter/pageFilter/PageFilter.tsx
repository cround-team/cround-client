import SortDropdown from "../../dropdown/sort/SortDropdown";
import { FilterIcon } from "@/assets/icons";
import { useState } from "react";
import PlatFormModal from "../../modal/platform/PlatFormModal";
import * as S from "./styled";
import { Sorts } from "@/types/service";

type PageFilterProps = {
  options: Sorts[];
  onSelectSort: (sorted: string) => void;
  onSubmitPlatform: (selected: string[]) => void;
};

export default function PageFilter({
  options,
  onSelectSort,
  onSubmitPlatform,
}: PageFilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPlatform = (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => {
    setIsModalOpen(false);
    onSubmitPlatform(selected);
  };

  return (
    <>
      <S.Container>
        <S.FilterButton onClick={() => handleOpenModal()}>
          <FilterIcon />
        </S.FilterButton>
        <SortDropdown options={options} onSelectSort={onSelectSort} />
      </S.Container>
      {isModalOpen && (
        <PlatFormModal
          onSubmitPlatform={handleSubmitPlatform}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
