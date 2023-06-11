import { PLATFORMS } from "@/constants/platforms";
import usePlatform from "@/hooks/form/usePlatform";
import * as S from "./styled";
import Button from "../../button/base/Button";
import PlatformCheckbox from "../../checkbox/PlatformCheckbox";

type PlatformFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, selected: string[]) => void;
};

export default function PlatformForm({ onSubmit }: PlatformFormProps) {
  const { selected, handleSelect, handlePrevStep, handleUnSelect } =
    usePlatform();
  return (
    <S.Form onSubmit={(e) => onSubmit(e, selected)}>
      <S.PlatformList>
        {PLATFORMS.map((el) => (
          <PlatformCheckbox
            key={el.id}
            src={el.src}
            value={el.id}
            isChecked={selected.includes(el.id)}
            title={el.title}
            onSelect={handleSelect}
            onUnSelect={handleUnSelect}
          />
        ))}
      </S.PlatformList>
      <S.ButtonWrapper>
        <Button
          type="button"
          label="이전"
          size="56"
          variant="ghost"
          css={S.PrevButton}
          onClick={handlePrevStep}
        />
        <Button
          label="다음"
          size="56"
          variant="primary"
          css={S.NextButton}
          isDisabled={selected.length ? false : true}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
