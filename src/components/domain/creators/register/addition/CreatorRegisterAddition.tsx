import {
  AddInput,
  Button,
  Label,
  PlatformDropdown,
  RegisterInput,
} from "@/components/common";
import * as S from "./styled";

type Inputs = {
  id: string;
  value: string;
};

type CreatorRegisterAdditionProps = {
  isDisabledSubmit: boolean;
  activityPlatforms: string[];
  platformHeadTheme: string;
  platformHeadType: string;
  platformUrl: string;
  inputTags: Inputs[];
  handleAddTag: () => void;
  handleRemoveTag: (id: string) => void;
  handleChangeTag: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function CreatorRegisterAddition({
  isDisabledSubmit,
  activityPlatforms,
  platformHeadTheme,
  platformHeadType,
  platformUrl,
  inputTags,
  handleAddTag,
  handleRemoveTag,
  handleChangeTag,
  handlePrevStep,
  handleChangeForm,
  handleSubmit,
}: CreatorRegisterAdditionProps) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <Label label="활동 중이신 플랫폼 중 대표 플랫폼을 선택해 주세요" />
        <PlatformDropdown
          selected={platformHeadType}
          platforms={activityPlatforms}
          onChange={handleChangeForm}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <RegisterInput
          label="활동 중이신 플랫폼 url을 등록해 주세요."
          size="md"
          id="platformUrl"
          name="platformUrl"
          placeholder="20글자 이내로 입력해 주세요"
          value={platformUrl}
          onChange={handleChangeForm}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <RegisterInput
          label="크리에이터님의 대표 테마를 1개 입력해 주세요."
          size="md"
          id="platformHeadTheme"
          name="platformHeadTheme"
          placeholder="10글자 이내로 입력해 주세요"
          tipMessage="(예시) ASMR, 먹방, 예술, 판타지, 일러스트 등"
          value={platformHeadTheme}
          onChange={handleChangeForm}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <AddInput
          label="크리에이터님의 강점을 1~7개 입력해 주세요."
          placeholder="20글자 이내로 입력해 주세요"
          tipMessage="(예시) 가성비, 꿀팁 가득, 프로그램 추천, 장비 추천 등"
          maxCount={7}
          inputs={inputTags}
          onAddInput={handleAddTag}
          onChangeInput={handleChangeTag}
          onRemoveInput={handleRemoveTag}
        />
      </S.InputWrapper>
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
          isDisabled={isDisabledSubmit}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
