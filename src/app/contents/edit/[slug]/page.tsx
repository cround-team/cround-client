"use client";

import {
  Button,
  Label,
  PlatformRadio,
  RegisterInput,
  TextArea,
} from "@/components/common";
import useContentEdit from "@/components/domain/contents/hooks/useContentEdit";
import { PLATFORMS } from "@/constants";
import * as S from "./styled";

type ContentEditPageProps = {
  params: {
    slug: number;
  };
};

export default function ContentEditPage({ params }: ContentEditPageProps) {
  const {
    isDisabledSubmit,
    form,
    handleChangeForm,
    handleChangePlatform,
    handleSubmit,
  } = useContentEdit({ id: params.slug });

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit}>
        <RegisterInput
          label="콘텐츠의 제목을 입력해 주세요."
          size="sm"
          id="title"
          name="title"
          value={form.title}
          placeholder="제목을 입력해 주세요"
          onChange={handleChangeForm}
        />
        <TextArea
          label="콘텐츠로 전달하고 싶으신 내용을 입력해 주세요."
          styles="base"
          id="content"
          name="content"
          value={form.content}
          placeholder="내용을 입력해 주세요"
          onChange={handleChangeForm}
        />
        <S.PlatformWrapper>
          <Label label="등록하실 콘텐츠에 해당하는 플랫폼을 선택해 주세요." />
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
