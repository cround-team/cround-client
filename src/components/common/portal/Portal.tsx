"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  elementId: string;
  isMounted: boolean;
  children: ReactNode;
};

export default function Portal({
  elementId,
  isMounted,
  children,
}: PortalProps) {
  if (isMounted) {
    const portal = document.getElementById(elementId);

    return portal ? createPortal(children, portal) : null;
  }

  return null;
}
