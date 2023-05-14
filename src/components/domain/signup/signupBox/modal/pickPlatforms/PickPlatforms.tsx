"use client";

import type { SignupStep } from "@/types/signup";
import Button from "@/components/common/button/base/Button";
import PrevButton from "../prevButton/PrevButton";
import * as S from "./styled";
import { YoutubeIcon } from "@/assets/icons/platforms";

type InputNickNameProps = {
  handleNextStep?: <T extends SignupStep>(cur: T, next: T) => void;
  handlePrevStep?: <T extends SignupStep>(cur: T, prev: T) => void;
};

const platforms = [
  {
    name: "유튜브",
    icon: <YoutubeIcon />,
  },
  {
    name: "인스타그램",
  },
  {
    name: "틱톡",
  },
  {
    name: "트위치",
  },
  {
    name: "아프리카TV",
  },
  {
    name: "블로그",
  },
  {
    name: "팟캐스트",
  },
  {
    name: "스푼",
  },
  {
    name: "제페토",
  },
  {
    name: "이모티콘",
  },
  {
    name: "웹툰",
  },
  {
    name: "NFT",
  },
];

export default function PickPlatforms({
  handleNextStep,
  handlePrevStep,
}: InputNickNameProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNextStep && handleNextStep("platforms", "themes");
  };

  return (
    <>
      {handlePrevStep && <PrevButton onClick={handlePrevStep} />}
      <S.TitleWrapper>
        <h2>관심 있는 플랫폼을 1개 이상 선택해주세요</h2>
        <p>00님에게 맞는 추천 목록을 보여드릴게요</p>
      </S.TitleWrapper>
      <S.Form>
        {platforms.map((el) => (
          <div>
            <label>
              {el.icon}
              <span>{el.name}</span>
            </label>
            <input type="radio" key={el.name} />
          </div>
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
