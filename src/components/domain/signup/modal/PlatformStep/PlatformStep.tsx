"use client";

import type { SignupStep } from "@/types/signup";
import Button from "@/components/common/button/base/Button";
import {
  YoutubeIcon,
  InstagramIcon,
  AfreecaTvIcon,
  BlogIcon,
  EmoticonIcon,
  NtfIcon,
  PodCastIcon,
  SpoonIcon,
  TikTokIcon,
  WebToonIcon,
  ZepetoIcon,
  TwitchIcon,
} from "@/assets/icons/platforms";
import PrevButton from "../prevButton/PrevButton";
import * as S from "./styled";
import PlatformRadio from "@/components/common/radio/PlatformRadio";

type PlatformsStepProps = {
  onNextStep?: (cur: SignupStep, next: SignupStep) => void;
  onPrevStep?: (cur: SignupStep, prev: SignupStep) => void;
};

const platforms = [
  {
    id: "youtube",
    name: "유튜브",
    icon: <YoutubeIcon />,
  },
  {
    id: "instagram",
    name: "인스타그램",
    icon: <InstagramIcon />,
  },
  {
    id: "tiktok",
    name: "틱톡",
    icon: <TikTokIcon />,
  },
  {
    id: "twitch",
    name: "트위치",
    icon: <TwitchIcon />,
  },
  {
    id: "afreeca",
    name: "아프리카TV",
    icon: <AfreecaTvIcon />,
  },
  {
    id: "blog",
    name: "블로그",
    icon: <BlogIcon />,
  },
  {
    id: "podCast",
    name: "팟캐스트",
    icon: <PodCastIcon />,
  },
  {
    id: "spoon",
    name: "스푼",
    icon: <SpoonIcon />,
  },
  {
    id: "zepeto",
    name: "제페토",
    icon: <ZepetoIcon />,
  },
  {
    id: "emoticon",
    name: "이모티콘",
    icon: <EmoticonIcon />,
  },
  {
    id: "webtoon",
    name: "웹툰",
    icon: <WebToonIcon />,
  },
  {
    id: "nft",
    name: "NFT",
    icon: <NtfIcon />,
  },
];

export default function PlatformsStep({
  onNextStep,
  onPrevStep,
}: PlatformsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onNextStep && onNextStep("platforms", "success");
  };

  return (
    <>
      <PrevButton onClick={() => onPrevStep("platforms", "nickName")} />
      <S.TitleWrapper>
        <h2>관심 있는 플랫폼을 1개 이상 선택해주세요</h2>
        <p>00님에게 맞는 추천 목록을 보여드릴게요</p>
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit}>
        {platforms.map((el) => (
          <PlatformRadio key={el.id} id={el.id} name={el.name} icon={el.icon} />
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
