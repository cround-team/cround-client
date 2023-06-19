import { PLATFORMS } from "@/constants/platforms";

import { XCloseIcon } from "@/assets/icons";
import * as S from "./styled";
import Modal from "../Modal";
import PlatformCheckbox from "../../checkbox/PlatformCheckbox";
import { Button } from "../../button";

type PlatFormModalProps = {
  isDisabledPlatform: boolean;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCloseModal: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function PlatFormModal({
  isDisabledPlatform,
  onChangePlatform,
  onCloseModal,
  onSubmit,
}: PlatFormModalProps) {
  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.CloseButton onClick={onCloseModal}>
          <XCloseIcon />
        </S.CloseButton>
        <S.Form onSubmit={onSubmit}>
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformCheckbox
                key={el.id}
                src={el.src}
                value={el.id}
                title={el.title}
                onChange={onChangePlatform}
              />
            ))}
          </S.PlatformList>
          <Button
            isDisabled={isDisabledPlatform}
            label={
              isDisabledPlatform ? "완료" : "플랫폼을 1개 이상 선택해 주세요"
            }
            size="48"
            variant="primary"
          />
        </S.Form>
      </S.Layout>
    </Modal>
  );
}
