"use client";

import Portal from "../portal/Portal";
import Dim from "./dim/Dim";

interface ModalProps {
  isMounted: boolean;
  children: React.ReactNode;
}

const Modal = ({ isMounted, children }: ModalProps) => {
  return (
    <Portal elementId="modal-root" isMounted={isMounted}>
      <Dim>{children}</Dim>
    </Portal>
  );
};

export default Modal;
