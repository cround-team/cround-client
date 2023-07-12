import { PATH } from "@/constants";
import { NavItem } from "@/components/common";
import * as S from "./styled";

export default function Navigation() {
  return (
    <S.Nav>
      <ul>
        <NavItem path={PATH.ROOT} label="홈" />
        <NavItem path={PATH.CREATORS.LIST} label="크리에이터" />
        <NavItem path={PATH.SHORTS.LIST} label="숏클래스" />
        <NavItem path={PATH.CONTENTS.LIST} label="콘텐츠" />
      </ul>
    </S.Nav>
  );
}
