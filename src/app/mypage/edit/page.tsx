"use client";

import { PLATFORMS } from "@/constants";
import {
  Button,
  Label,
  PlatformCheckbox,
  RegisterInput,
} from "@/components/common";
import { useMenteeEdit } from "@/components/domain";
import * as S from "./styled";

export default function MyEditPage() {
  const {
    isDisabledSubmit,
    form,
    handleChangeInput,
    handleChangePlatform,
    handleSubmit,
  } = useMenteeEdit();

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit}>
        <RegisterInput
          label="닉네임"
          size="md"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          value={form.nickname}
          onChange={handleChangeInput}
        />
        <S.PlatformWrapper>
          <Label label="관심 있는 플랫폼을 1개 이상 선택해 주세요" />
          <S.PlatformList>
            {PLATFORMS.map((el) => (
              <PlatformCheckbox
                isChecked={
                  form.interestPlatforms.includes(el.id.toUpperCase())
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
