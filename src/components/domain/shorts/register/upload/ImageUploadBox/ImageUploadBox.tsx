import { UploadCloudIcon } from "@/assets/icons";
import Button from "@/components/common/button/base/Button";
import FileInput from "@/components/common/input/file/FileInput";
import * as S from "./styled";
import Image from "next/image";
import { media } from "@/styles/themes/foundations";

type ImageUploadBoxProps = {
  fileRef: React.ForwardedRef<HTMLInputElement>;
  previewImage: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadBox({
  fileRef,
  previewImage,
  onFileChange,
}: ImageUploadBoxProps) {
  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  if (previewImage) {
    return (
      <S.Figure>
        <Image
          src={previewImage}
          fill
          priority
          sizes={media.images.sizes}
          alt="ShortClass thumbnail"
        />
      </S.Figure>
    );
  } else {
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
}
