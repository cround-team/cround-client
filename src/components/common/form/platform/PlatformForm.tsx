import { PLATFORMS } from "@/constants/platforms";
import Button from "../../button/base/Button";

import * as S from "./styled";
import { PlatformCheckbox } from "../../checkbox";
import { PlatformRadio } from "../../radio";

type PlatformFormProps = {
  isDisabledSubmit: boolean;
  selected: string[] | string;
  onPrevStep: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function PlatformForm({
  isDisabledSubmit,
  selected,
  onPrevStep,
  onChange,
  onSubmit,
}: PlatformFormProps) {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.PlatformList>
        {Array.isArray(selected) &&
          PLATFORMS.map((el) => (
            <PlatformCheckbox
              isChecked={selected.includes(el.id) ? true : false}
              key={el.id}
              src={el.src}
              value={el.id}
              title={el.title}
              onChange={onChange}
            />
          ))}
        {!Array.isArray(selected) &&
          PLATFORMS.map((el) => (
            <PlatformRadio
              isChecked={selected.includes(el.id) ? true : false}
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
