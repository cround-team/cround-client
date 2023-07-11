import Image from "next/image";

import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type AvatarWrapperProps = {
  profileImage: string;
};

export default function AvatarWrapper({ profileImage }: AvatarWrapperProps) {
  return (
    <S.Figure>
      <Image
        src={profileImage}
        alt="Profile Image"
        sizes={media.images.sizes}
        fill
        priority
      />
    </S.Figure>
  );
}
