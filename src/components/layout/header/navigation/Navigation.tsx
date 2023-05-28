"use client";

import { PATH } from "@/constants";
import * as S from "./styled";
import NavItem from "@/components/common/navItem/NavItem";

const LINKS = [
  { path: PATH.ROOT, label: "홈" },
  { path: PATH.CREATORS.LIST, label: "크리에이터" },
  { path: PATH.SHORTS.LIST, label: "숏클래스" },
  { path: PATH.CONTENTS.LIST, label: "콘텐츠" },
];

export default function Navigation() {
  return (
    <S.Nav>
      <ul>
        {LINKS.map((link) => (
          <NavItem key={link.label} path={link.path} label={link.label} />
        ))}
      </ul>
    </S.Nav>
  );
}
