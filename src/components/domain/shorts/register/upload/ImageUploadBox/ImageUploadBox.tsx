import Image from "next/image";

import { UploadCloudIcon, XClose2Icon } from "@/assets/icons";
import { Button, FileInput } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import { useDeviceType } from "@/hooks";

type ImageUploadBoxProps = {
  fileRef: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadBox({
  fileRef,
  previewImage,
  onFileChange,
}: ImageUploadBoxProps) {
  const { isDesktop } = useDeviceType();

  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  const handleDeleteImage = () => {
    alert("작업중입니다.");
  };

  if (previewImage) {
    return (
      <S.Figure>
        <button onClick={handleDeleteImage}>
          <XClose2Icon />
        </button>
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
            size={isDesktop ? "48" : "32"}
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
