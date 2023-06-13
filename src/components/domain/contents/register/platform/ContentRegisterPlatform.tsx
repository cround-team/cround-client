import { Label, PlatformForm } from "@/components/common";
import * as S from "./styled";

type ContentRegisterPlatformProps = {
  isDisabledSubmit: boolean;
  handlePrevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContentRegisterPlatform({
  isDisabledSubmit,
  handlePrevStep,
  handleChange,
  handleSubmit,
}: ContentRegisterPlatformProps) {
  return (
    <S.Container>
      <Label label="등록하실 콘텐츠에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm
        isDisabledSubmit={isDisabledSubmit}
        onPrevStep={handlePrevStep}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </S.Container>
  );
}
