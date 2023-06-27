import { PLATFORMS } from "@/constants/platforms";
import { Button, PlatformCheckbox } from "@/components/common";
import { ArrowNarrowLeftIcon } from "@/assets/icons";
import * as S from "./styled";

type SignupPlatformStepProps = {
  isDisabledSubmit: boolean;
  name: string;
  platforms: string[];
  handlePrevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SignupPlatformStep({
  isDisabledSubmit,
  name,
  platforms,
  handlePrevStep,
  handleChange,
  handleSubmit,
}: SignupPlatformStepProps) {
  return (
    <>
      <S.PrevButton onClick={handlePrevStep}>
        <ArrowNarrowLeftIcon />
      </S.PrevButton>
      <S.TitleWrapper>
        <h2>관심 있는 플랫폼을 1개 이상 선택해 주세요</h2>
        <p>{name}님에게 맞는 추천 목록을 보여드릴게요</p>
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit}>
        {PLATFORMS.map((el) => (
          <PlatformCheckbox
            isChecked={platforms.includes(el.id)}
            key={el.id}
            src={el.src}
            value={el.id}
            title={el.title}
            onChange={handleChange}
          />
        ))}
        <Button
          isDisabled={isDisabledSubmit}
          label="다음"
          size="48"
          variant="primary"
        />
      </S.Form>
    </>
  );
}
