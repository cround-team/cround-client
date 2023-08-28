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
        width={100}
        height={100}
        priority
      />
    </S.Figure>
  );
}
