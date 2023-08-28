import { Label, PlatformForm } from "@/components/common";
import * as S from "./styled";

type ContentRegisterPlatformProps = {
  isDisabledSubmit: boolean;
  selectedPlatform: string;
  handlePrevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContentRegisterPlatform({
  isDisabledSubmit,
  selectedPlatform,
  handlePrevStep,
  handleChange,
  handleSubmit,
}: ContentRegisterPlatformProps) {
  return (
    <S.Container>
      <Label label="등록하실 콘텐츠에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm
        selected={selectedPlatform}
        isDisabledSubmit={isDisabledSubmit}
        onPrevStep={handlePrevStep}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </S.Container>
  );
}
