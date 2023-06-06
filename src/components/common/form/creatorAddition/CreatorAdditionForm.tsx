"use client";

import PlatformDropdown from "@/components/common/dropdown/platform/PlatformDropdown";
import * as S from "./styled";
import Label from "@/components/common/label/Label";
import Input from "@/components/common/input/base/Input";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./addButton/AddButton";

type Input = {
  id: string;
  value: string;
};

export default function CreatorAdditionForm() {
  const [tags, setTags] = useState([
    {
      id: "0",
      value: "",
    },
  ]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleAddInput = (id: string) => {
    const newInput: Input = { id: uuidv4(), value: "" };
    if (id === "tag") {
      setTags((prevInputs) => [...prevInputs, newInput]);
    }
  };
  return (
    <S.Form>
      <S.InputWrapper>
        <Label label="활동 중이신 플랫폼 중 대표 플랫폼을 선택해 주세요" />
        <PlatformDropdown />
      </S.InputWrapper>
      <S.InputWrapper>
        <RegisterInput
          tipMessage="(예시) ASMR, 먹방, 예술, 판타지, 일러스트 등"
          label="크리에이터님의 대표 테마를 1개 입력해 주세요."
          id="theme"
          name="theme"
          placeholder="10글자 이내로 입력해 주세요"
          onChange={handleInputChange}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <RegisterInput
          label="크리에이터님의 강점을 1~7개 입력해 주세요."
          tipMessage="(예시) 가성비, 꿀팁 가득, 프로그램 추천, 장비 추천 등"
          id="tag"
          name="tag"
          placeholder="20글자 이내로 입력해 주세요"
          errorMessage=""
          onChange={handleInputChange}
        />
        <AddButton id="tag" onClick={handleAddInput} />
      </S.InputWrapper>
      <S.InputWrapper>
        <RegisterInput
          label="활동 중이신 플랫폼 url을 등록해 주세요."
          id="tag"
          name="tag"
          placeholder="20글자 이내로 입력해 주세요"
          errorMessage=""
          onChange={handleInputChange}
        />
        <AddButton id="tag" onClick={handleAddInput} />
      </S.InputWrapper>
    </S.Form>
  );
}
