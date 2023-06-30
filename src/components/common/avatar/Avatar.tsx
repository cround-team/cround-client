import Image from "next/image";

import avatarImg from "public/images/avatar.png";
import { media } from "@/styles/themes/foundations";
import { CameraIcon } from "@/assets/icons";
import * as S from "./styled";
import { FileInput } from "../input";

type AvatarPorps = {
  fileRef: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  alt: string;
  className?: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Avatar({
  fileRef,
  previewImage,
  alt,
  className,
  onFileChange,
}: AvatarPorps) {
  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  return (
    <S.Figure className={className}>
      {previewImage && (
        <Image
          src={previewImage}
          alt={alt}
          sizes={media.images.sizes}
          fill={true}
          priority
        />
      )}
      {!previewImage && (
        <Image
          src={avatarImg}
          alt={alt}
          sizes={media.images.sizes}
          fill={true}
          priority
        />
      )}
      {fileRef && onFileChange && (
        <>
          <FileInput fileRef={fileRef} onFileChange={onFileChange} />
          <S.UploadButton type="button" onClick={() => handleOpenFileDialog()}>
            <CameraIcon />
          </S.UploadButton>
        </>
      )}
    </S.Figure>
  );
}
