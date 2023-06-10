import { UploadCloudIcon } from "@/assets/icons";
import * as S from "./styled";
import Button from "@/components/common/button/base/Button";
import { useRef } from "react";
import { useUploadImage } from "@/hooks/useUploadImage";
import FileInput from "@/components/common/input/file/FileInput";

type ImageUploadBoxProps = {
  fileRef?: React.RefObject<HTMLInputElement>;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadBox({
  fileRef,
  onFileChange,
}: ImageUploadBoxProps) {
  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  return (
    <S.Container>
      <S.IconWrapper>
        <FileInput fileRef={fileRef} onFileChange={onFileChange} />
        <UploadCloudIcon />
        <S.Extension>.jpg .png 10MB 이내</S.Extension>
      </S.IconWrapper>
      <S.ButtonWrapper>
        <Button
          type="button"
          size="32"
          label="이미지 선택"
          variant="primary"
          onClick={() => handleOpenFileDialog()}
        />
        <S.TipMessage>또는 파일을 이곳으로 드래그 해주세요.</S.TipMessage>
      </S.ButtonWrapper>
    </S.Container>
  );
}
