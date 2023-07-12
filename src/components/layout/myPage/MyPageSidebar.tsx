"use client";

import { useEffect, useRef } from "react";

import { useAuthContext } from "@/context/AuthContext";
import { Dim, Portal } from "@/components/common";
import MemberSidebar from "./sidebar/MemberSidebar";
import NonMemberSidebar from "./sidebar/NonMemberSidebar";
import CreatorSidebar from "./sidebar/CreatorSidebar";

type MyPageSidebarProps = {
  isMounted: boolean;
  onClose?: () => void;
};

export default function MyPageSidebar({
  isMounted,
  onClose,
}: MyPageSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthContext();

  const handleClickOutside: EventListener = (e: Event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  return (
    <Portal elementId="sidebar" isMounted={isMounted}>
      <Dim>
        <div ref={sidebarRef}>{renderSidebar()}</div>
      </Dim>
    </Portal>
  );
}
