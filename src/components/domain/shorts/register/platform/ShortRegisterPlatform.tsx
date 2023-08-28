import { Label, PlatformForm } from "@/components/common";
import * as S from "./styled";

type ShortRegisterPlatformProps = {
  isDisabledSubmit: boolean;
  selectedPlatform: string;
  handlePrevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ShortRegisterPlatform({
  isDisabledSubmit,
  selectedPlatform,
  handlePrevStep,
  handleChange,
  handleSubmit,
}: ShortRegisterPlatformProps) {
  return (
    <S.Container>
      <Label label="등록하실 숏클래스에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm
        isDisabledSubmit={isDisabledSubmit}
        selected={selectedPlatform}
        onPrevStep={handlePrevStep}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </S.Container>
  );
}
