import Image from "next/image";
import { useEffect } from "react";

import { PictureIcon, UploadCloudIcon, XClose2Icon } from "@/assets/icons";
import { Button, FileInput } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import { useDeviceType } from "@/hooks";
import * as S from "./styled";

type ImageUploadBoxProps = {
  isImageLoading: boolean;
  fileRef: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadBox({
  isImageLoading,
  fileRef,
  previewImage,
  onFileChange,
}: ImageUploadBoxProps) {
  useEffect(() => {
    console.log("test", isImageLoading);
  }, [isImageLoading]);

  const { isDesktop } = useDeviceType();

  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("작업중입니다.");
  };

  if (previewImage && !isImageLoading) {
    return (
      <S.Figure>
        <button onClick={(e) => handleDeleteImage(e)}>
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
        {isImageLoading && (
          <S.LoadingHeader>
            <S.ProgressBar />
          </S.LoadingHeader>
        )}
        {isImageLoading && (
          <S.UploadingWrapper>
            <PictureIcon />
            <span>업로드중</span>
          </S.UploadingWrapper>
        )}
        {!isImageLoading && (
          <>
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
              {/* <S.TipMessage>또는 파일을 이곳으로 드래그 해주세요.</S.TipMessage> */}
            </S.ButtonWrapper>
          </>
        )}
      </S.Container>
    );
  }
}
