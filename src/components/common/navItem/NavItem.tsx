import Link from "next/link";

import * as S from "./styled";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  path: string;
};

export default function NavItem({ label, path }: NavItemProps) {
  const pathname = usePathname();
  const isMacthed = pathname === path;
  return (
    <S.List aria-current={isMacthed ? "page" : "false"}>
      <Link href={path}>{label}</Link>
    </S.List>
  );
}
