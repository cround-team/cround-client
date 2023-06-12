"use client";

import { useCreatorRegisterContext } from "@/context/CreatorRegisterContext";
import PlatformDropdown from "@/components/common/dropdown/platform/PlatformDropdown";
import Label from "@/components/common/label/Label";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import { AddInput, Button } from "@/components/common";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";
import * as S from "./styled";

export default function CreatorRegisterAdditionPage() {
  const {
    formData,
    activityPlatforms,
    handleSetPlatformHeadType,
    handleChangeForm,
  } = useCreatorRegisterContext();

  const {
    isAdditionDisabled,
    inputTags,
    handlePrevStep,
    handleAddTag,
    handleChangeTag,
    handleRemoveTag,
    handleSubmitApi,
  } = useCreatorRegister();

  const { platformHeadTheme, platformUrl } = formData;

  return (
    <S.Form onSubmit={handleSubmitApi}>
      <S.InputWrapper>
        <Label label="활동 중이신 플랫폼 중 대표 플랫폼을 선택해 주세요" />
        <PlatformDropdown
          platforms={activityPlatforms}
          onChange={handleSetPlatformHeadType}
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
          isDisabled={isAdditionDisabled}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
