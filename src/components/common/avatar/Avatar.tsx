import Image from "next/image";

import avatarImg from "public/images/avatar.png";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import FileInput from "../input/file/FileInput";
import { CameraIcon } from "@/assets/icons";

type AvatarPorps = {
  fileRef?: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  alt: string;
  className?: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Avatar({
  fileRef,
  previewImage,
  alt,
  className = "",
  onFileChange,
}: AvatarPorps) {
  const handleOpenFileDialog = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  return (
    <S.Figure className={className}>
      <Image
        src={previewImage ?? avatarImg}
        alt={alt}
        sizes={media.images.sizes}
        fill
        priority
      />
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
