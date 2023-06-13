import { Label, PlatformForm } from "@/components/common";
import * as S from "./styled";

type CreatorRegisterPlatformProps = {
  isDisabledSubmit: boolean;
  handlePrevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function CreatorRegisterPlatform({
  isDisabledSubmit,
  handlePrevStep,
  handleChange,
  handleSubmit,
}: CreatorRegisterPlatformProps) {
  return (
    <S.Container>
      <Label label="활동 중이신 플랫폼을 1개 이상 선택해 주세요" />
      <PlatformForm
        isDisabledSubmit={isDisabledSubmit}
        onPrevStep={handlePrevStep}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </S.Container>
  );
}
