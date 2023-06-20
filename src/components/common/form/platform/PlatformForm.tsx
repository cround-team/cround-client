import { PLATFORMS } from "@/constants/platforms";
import * as S from "./styled";
import Button from "../../button/base/Button";
import PlatformCheckbox from "../../checkbox/platform/PlatformCheckbox";

type PlatformFormProps = {
  isDisabledSubmit: boolean;
  onPrevStep: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function PlatformForm({
  isDisabledSubmit,
  onPrevStep,
  onChange,
  onSubmit,
}: PlatformFormProps) {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.PlatformList>
        {PLATFORMS.map((el) => (
          <PlatformCheckbox
            key={el.id}
            src={el.src}
            value={el.id}
            title={el.title}
            onChange={onChange}
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
          onClick={onPrevStep}
        />
        <Button
          label="다음"
          size="56"
          variant="primary"
          css={S.NextButton}
          isDisabled={isDisabledSubmit}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
