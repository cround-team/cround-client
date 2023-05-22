"use client";

import type { SignupStep } from "@/types/signup";
import Button from "@/components/common/button/base/Button";
import PrevButton from "../prevButton/PrevButton";

import PlatformCheckbox from "@/components/common/checkbox/PlatformCheckbox";
import { PLATFORMS } from "@/constants/platforms";
import * as S from "./styled";
import { useState } from "react";

type PlatformsStepProps = {
  onNextStep?: (cur: SignupStep, next: SignupStep) => void;
  onPrevStep?: (cur: SignupStep, prev: SignupStep) => void;
};

export default function PlatformsStep({
  onNextStep,
  onPrevStep,
}: PlatformsStepProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNextStep && onNextStep("platforms", "success");
  };

  const handleSelect = (platform: string) => {
    setSelected((prev) => [...prev, platform]);
  };

  const handleUnSelect = (platform: string) => {
    setSelected((prev) => prev.filter((el) => el !== platform));
  };

  return (
    <>
      <PrevButton onClick={() => onPrevStep("platforms", "nickName")} />
      <S.TitleWrapper>
        <h2>관심 있는 플랫폼을 1개 이상 선택해주세요</h2>
        <p>00님에게 맞는 추천 목록을 보여드릴게요</p>
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit}>
        {PLATFORMS.map((el) => (
          <PlatformCheckbox
            key={el.id}
            src={el.src}
            value={el.id}
            title={el.title}
            onSelect={handleSelect}
            onUnSelect={handleUnSelect}
          />
        ))}
        <Button
          label="다음"
          size="48"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
    </>
  );
}
