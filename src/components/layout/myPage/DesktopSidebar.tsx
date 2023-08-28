import React, { useRef } from "react";

import MemberSidebar from "./sidebar/MemberSidebar";
import CreatorSidebar from "./sidebar/CreatorSidebar";
import NonMemberSidebar from "./sidebar/NonMemberSidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useClickOutside } from "@/hooks";
import * as S from "./styled";

type DesktopSidebarProps = {
  onClose: () => void;
};

export default function DesktopSidebar({ onClose }: DesktopSidebarProps) {
  const containerRef = useRef(null);
  const { user } = useAuthContext();
  useClickOutside(containerRef, onClose);

  const renderSidebar = () => {
    switch (user.roleName) {
      case "member":
        return <MemberSidebar />;

      case "creator":
        return <CreatorSidebar />;

      default:
        return <NonMemberSidebar />;
    }
  };

  return <S.Container ref={containerRef}>{renderSidebar()}</S.Container>;
}
