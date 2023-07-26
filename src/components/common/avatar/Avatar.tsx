import Image from "next/image";
import PulseLoader from "react-spinners/PulseLoader";

import avatarImg from "public/images/avatar.png";
import { colors, media } from "@/styles/themes/foundations";
import { CameraIcon } from "@/assets/icons";
import * as S from "./styled";
import { FileInput } from "../input";
import { CSSProperties } from "styled-components";

type AvatarPorps = {
  isLoading: boolean;
  fileRef: React.RefObject<HTMLInputElement>;
  previewImage: string | null;
  alt: string;
  className?: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  margin: "0 auto",
  borderColor: "red",
};

export default function Avatar({
  isLoading,
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
            {isLoading ? (
              <PulseLoader
                size={4}
                color={colors.neutral800}
                cssOverride={override}
              />
            ) : (
              <CameraIcon />
            )}
          </S.UploadButton>
        </>
      )}
    </S.Figure>
  );
}
