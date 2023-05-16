"use client";

import Link from "next/link";

import usePathMatch from "@/hooks/usePathMatch";
import * as S from "./styled";

type NavItemProps = {
  label: string;
  path: string;
};

export default function NavItem({ label, path }: NavItemProps) {
  const isMacthed = usePathMatch(path);
  return (
    <S.List aria-current={isMacthed ? "page" : "false"}>
      <Link href={path}>{label}</Link>
    </S.List>
  );
}
