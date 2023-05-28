import { useState } from "react";

import { BellIcon, HamburgerIcon } from "@/assets/icons";
import * as S from "./styled";
import MyPageSidebar from "@/components/layout/myPage/MyPageSidebar";

export default function Utils() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleBellClick = () => {};

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
      </S.Container>
      {isSidebarOpen && <MyPageSidebar />}
    </>
  );
}
