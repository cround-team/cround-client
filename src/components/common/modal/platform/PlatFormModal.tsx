import { useState } from "react";

import { PLATFORMS } from "@/constants/platforms";
import Modal from "../Modal";
import * as S from "./styled";
import Button from "../../button/base/Button";
import PlatformCheckbox from "../../checkbox/PlatformCheckbox";
import { XCloseIcon } from "@/assets/icons";

type PlatFormModalProps = {
  onCloseModal: () => void;
};

export default function PlatFormModal({ onCloseModal }: PlatFormModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSelect = (platform: string) => {
    setSelected((prev) => [...prev, platform]);
  };

  const handleUnSelect = (platform: string) => {
    setSelected((prev) => prev.filter((el) => el !== platform));
  };

  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.CloseButton onClick={onCloseModal}>
          <XCloseIcon />
        </S.CloseButton>
        <S.Form onSubmit={handleSubmit}>
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformCheckbox
                key={el.id}
                src={el.src}
                value={el.id}
                title={el.title}
                onSelect={handleSelect}
                onUnSelect={handleUnSelect}
              />
            ))}
          </S.PlatformList>
          <Button
            label={selected.length ? "완료" : "플랫폼을 1개 이상 선택해 주세요"}
            size="48"
            variant="primary"
            onClick={handleSubmit}
          />
        </S.Form>
      </S.Layout>
    </Modal>
  );
}
