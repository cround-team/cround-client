import { PLATFORMS } from "@/constants/platforms";
import Modal from "../Modal";
import * as S from "./styled";
import Button from "../../button/base/Button";
import PlatformCheckbox from "../../checkbox/PlatformCheckbox";
import { XCloseIcon } from "@/assets/icons";
import useSelectPlatform from "@/hooks/input/useSelectPlatform";

type PlatFormModalProps = {
  onSubmitPlatform: (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => void;
  onCloseModal: () => void;
};

export default function PlatFormModal({
  onSubmitPlatform,
  onCloseModal,
}: PlatFormModalProps) {
  const { selected, handleSelect, handleUnSelect } = useSelectPlatform();

  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.CloseButton onClick={onCloseModal}>
          <XCloseIcon />
        </S.CloseButton>
        <S.Form onSubmit={(e) => onSubmitPlatform(e, selected)}>
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformCheckbox
                key={el.id}
                isChecked={selected.includes(el.id)}
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
          />
        </S.Form>
      </S.Layout>
    </Modal>
  );
}
