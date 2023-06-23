import { Button, Label, RegisterInput } from "@/components/common";
import ImageUploadBox from "./ImageUploadBox/ImageUploadBox";
import * as S from "./styled";

type ShortRegisterUploadProps = {
  isDisabledSubmit: boolean;
  url: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  handlePrevStep: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ShortRegisterUpload({
  isDisabledSubmit,
  url,
  fileInputRef,
  previewImage,
  handlePrevStep,
  handleFileChange,
  handleChangeForm,
  handleSubmit,
}: ShortRegisterUploadProps) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Thumbnail>
        <Label label="숏클래스의 썸네일을 등록해 주세요." />
        <ImageUploadBox
          fileRef={fileInputRef}
          previewImage={previewImage}
          onFileChange={handleFileChange}
        />
      </S.Thumbnail>
      <RegisterInput
        css={S.MarginBottom}
        label="숏클래스의 url을 등록해 주세요."
        size="md"
        id="url"
        name="url"
        placeholder="url을 등록해 주세요"
        value={url}
        onChange={handleChangeForm}
      />
      <S.ButtonWrapper>
        <Button
          type="button"
          label="이전"
          size="56"
          variant="ghost"
          css={S.PrevButton}
          onClick={handlePrevStep}
        />
        <Button
          label="다음"
          size="56"
          variant="primary"
          css={S.NextButton}
          isDisabled={isDisabledSubmit}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
