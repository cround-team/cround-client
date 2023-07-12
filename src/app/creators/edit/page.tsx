"use client";

import {
  AddInput,
  Avatar,
  Button,
  Label,
  PlatformCheckbox,
  PlatformDropdown,
  RegisterInput,
  TextArea,
} from "@/components/common";
import * as S from "./styled";
import useCreatorEdit from "@/components/domain/creators/hooks/useCreatorEdit";
import { PLATFORMS } from "@/constants";

export default function CreatorEditPage() {
  const {
    isDisabledSubmit,
    customTags,
    handleAddTag,
    handleRemoveTag,
    handleChangeTag,
    form,
    fileInputRef,
    handleChangeForm,
    handleChangePlatform,
    previewImage,
    handleFileChange,
    handleSubmit,
  } = useCreatorEdit();

  console.log(form.platformHeadType);

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit}>
        <Avatar
          css={S.Avatar}
          previewImage={previewImage ?? form.profileImage}
          fileRef={fileInputRef}
          alt="My profile image"
          onFileChange={handleFileChange}
        />
        <RegisterInput
          css={S.Nickname}
          label="크리에이터 닉네임"
          size="md"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          value={form.nickname}
          onChange={handleChangeForm}
        />
        <TextArea
          css={S.TextArea}
          label="크리에이터 소개글"
          id="description"
          name="description"
          placeholder="간단한 소개글을 입력해 주세요"
          value={form.description}
          onChange={handleChangeForm}
        />
        <S.PlatformWrapper>
          <Label label="활동 중인 플랫폼" />
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformCheckbox
                isChecked={
                  form.activityPlatforms.includes(el.id.toUpperCase())
                    ? true
                    : false
                }
                key={el.id.toUpperCase()}
                src={el.src}
                value={el.id.toUpperCase()}
                title={el.title}
                onChange={handleChangePlatform}
              />
            ))}
          </S.PlatformList>
        </S.PlatformWrapper>
        <S.LabelWrapper>
          <Label label="대표 플랫폼" />
          <PlatformDropdown
            selected={form.platformHeadType}
            platforms={form.activityPlatforms}
            onChange={handleChangeForm}
          />
        </S.LabelWrapper>
        <RegisterInput
          label="활동 중인 플랫폼 url"
          size="md"
          id="platformUrl"
          name="platformUrl"
          placeholder="20글자 이내로 입력해 주세요"
          value={form.platformUrl}
          onChange={handleChangeForm}
        />
        <RegisterInput
          css={S.PlatformHeadTheme}
          label="크리에이터님의 대표 테마"
          size="md"
          id="platformHeadTheme"
          name="platformHeadTheme"
          placeholder="10글자 이내로 입력해 주세요"
          tipMessage="(예시) ASMR, 먹방, 예술, 판타지, 일러스트 등"
          value={form.platformHeadTheme}
          onChange={handleChangeForm}
        />
        <AddInput
          css={S.AddInput}
          label="크리에이터님의 강점"
          placeholder="20글자 이내로 입력해 주세요"
          tipMessage="(예시) 가성비, 꿀팁 가득, 프로그램 추천, 장비 추천 등"
          maxCount={7}
          inputs={customTags}
          onAddInput={handleAddTag}
          onChangeInput={handleChangeTag}
          onRemoveInput={handleRemoveTag}
        />
        <Button
          isDisabled={isDisabledSubmit}
          label="변경하기"
          variant="primary"
          size="56"
        />
      </S.Form>
    </S.Section>
  );
}
