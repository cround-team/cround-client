"use client";

import { useEffect, useRef } from "react";

import { useAuthContext } from "@/context/AuthContext";
import { Dim, Portal } from "@/components/common";
import MemberSidebar from "./sidebar/MemberSidebar";
import NonMemberSidebar from "./sidebar/NonMemberSidebar";
import CreatorSidebar from "./sidebar/CreatorSidebar";
import { usePathname } from "next/navigation";

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

  return (
    <Portal elementId="sidebar" isMounted={isMounted}>
      <Dim>
        <div ref={sidebarRef}>
          {user.type === "nonMember" && <NonMemberSidebar />}
          {user.type === "member" && <MemberSidebar />}
          {user.type === "creator" && <CreatorSidebar />}
        </div>
      </Dim>
    </Portal>
  );
}
