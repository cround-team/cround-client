"use client";
import {
  Button,
  Label,
  PlatformRadio,
  RegisterInput,
  TextArea,
} from "@/components/common";
import { PLATFORMS } from "@/constants";
import useShortEdit from "@/components/domain/shorts/hooks/useShortEdit";
import * as S from "./styled";
import ImageUploadBox from "@/components/domain/shorts/register/upload/ImageUploadBox/ImageUploadBox";

type ShortEditPageProps = {
  params: {
    slug: number;
  };
};

export default function ShortEditPage({ params }: ShortEditPageProps) {
  const {
    isDisabledSubmit,
    form,
    fileInputRef,
    handleChangeForm,
    handleChangePlatform,
    handleFileChange,
    handleSubmit,
  } = useShortEdit({ id: params.slug });

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit}>
        <RegisterInput
          label="숏클래스의 제목을 입력해 주세요."
          size="sm"
          id="title"
          name="title"
          value={form.title}
          placeholder="제목을 입력해 주세요"
          onChange={handleChangeForm}
        />
        <TextArea
          label="숏클래스에 관한 내용을 입력해 주세요."
          styles="base"
          id="content"
          name="content"
          value={form.content}
          placeholder="내용을 입력해 주세요"
          onChange={handleChangeForm}
        />
        <S.PlatformWrapper>
          <Label label="등록하실 숏클래스에 해당하는 플랫폼을 선택해 주세요." />
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformRadio
                isChecked={form.platformType.includes(el.id) ? true : false}
                key={el.id}
                src={el.src}
                value={el.id}
                title={el.title}
                onChange={handleChangePlatform}
              />
            ))}
          </S.PlatformList>
        </S.PlatformWrapper>
        <S.Thumbnail>
          <Label label="숏클래스의 썸네일을 등록해 주세요." />
          <ImageUploadBox
            fileRef={fileInputRef}
            previewImage={form.thumbnailUrl}
            onFileChange={handleFileChange}
          />
        </S.Thumbnail>
        <Button
          isDisabled={isDisabledSubmit}
          label="수정하기"
          size="56"
          variant="primary"
        />
      </S.Form>
    </S.Section>
  );
}
