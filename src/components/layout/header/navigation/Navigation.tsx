"use client";

import Link from "next/link";

import * as S from "./Navigation.styled";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", name: "홈" },
  { href: "/creator", name: "크리에이터" },
  { href: "/shortClass", name: "숏클래스" },
  { href: "/contents", name: "콘텐츠" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <S.Nav>
      <ul>
        {LINKS.map((link) => (
          <S.List key={link.name} isActive={link.href === pathname}>
            <Link href={link.href}>{link.name}</Link>
          </S.List>
        ))}
      </ul>
    </S.Nav>
  );
}
