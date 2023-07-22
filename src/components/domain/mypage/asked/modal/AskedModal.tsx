import { useRef } from "react";

import { XCloseIcon } from "@/assets/icons";
import { useClickOutside, useHiddenScroll } from "@/hooks";
import { Modal } from "@/components/common";
import MessageContainer from "../container/MessageContainer";
import useAskedDetail from "../hooks/useAskedDetail";
import * as S from "./styled";

type AskedModalProps = {
  creatorId: number;
  onClose: () => void;
};

export default function AskedModal({ creatorId, onClose }: AskedModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);
  useHiddenScroll(modalRef);
  const { messages, sender, receiver, nickname } = useAskedDetail();

  console.log("receiver", receiver);

  return (
    <Modal isMounted={true}>
      <S.Layout ref={modalRef}>
        <S.CloseButton onClick={onClose}>
          <XCloseIcon />
        </S.CloseButton>
        <MessageContainer
          nickname={nickname}
          messages={messages}
          sender={sender}
          receiver={receiver}
        />
      </S.Layout>
    </Modal>
  );
}
