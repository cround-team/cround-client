import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BellIcon, HamburgerIcon } from "@/assets/icons";
import MyPageSidebar from "@/components/layout/myPage/MyPageSidebar";
import * as S from "./styled";
import { useDeviceType } from "@/hooks";
import DesktopSidebar from "../../myPage/DesktopSidebar";
import { PATH } from "@/constants";

export default function Utils() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { isDesktop } = useDeviceType();

  useEffect(() => {
    isSidebarOpen && setIsSidebarOpen(false);
  }, [pathname]);

  const handleBellClick = () => {
    router.push(PATH.MYPAGE.NOTICE);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <S.Container>
        <button onClick={() => handleBellClick()}>
          <BellIcon />
        </button>
        <button onClick={() => handleToggleSidebar()}>
          <HamburgerIcon />
        </button>
        {isSidebarOpen && isDesktop && (
          <DesktopSidebar onClose={handleCloseSidebar} />
        )}
        {isSidebarOpen && !isDesktop && (
          <MyPageSidebar
            isMounted={isSidebarOpen}
            onClose={handleCloseSidebar}
          />
        )}
      </S.Container>
    </>
  );
}
