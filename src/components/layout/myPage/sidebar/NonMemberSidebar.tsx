import Link from "next/link";
import Image from "next/image";

import { PATH } from "@/constants";
import { media } from "@/styles/themes/foundations";
import userImg from "public/images/user.png";
import { ChevronRightIcon } from "@/assets/icons";
import * as S from "./styled";

export default function NonMemberSidebar() {
  return (
    <S.Container>
      <S.NonMember>
        <S.Figure>
          <Image
            src={userImg}
            sizes={media.images.sizes}
            alt="user"
            priority
            fill
          />
        </S.Figure>
        <S.LoginLink href={PATH.AUTH}>
          로그인하기
          <ChevronRightIcon />
        </S.LoginLink>
      </S.NonMember>
      <S.List>
        <li>
          <Link href={PATH.AUTH}>회원가입</Link>
        </li>
      </S.List>
    </S.Container>
  );
}
