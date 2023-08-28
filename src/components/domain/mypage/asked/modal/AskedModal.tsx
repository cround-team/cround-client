import { useRef } from "react";

import { XCloseIcon } from "@/assets/icons";
import { useClickOutside, useHiddenScroll } from "@/hooks";
import { Modal } from "@/components/common";
import MessageContainer from "../container/MessageContainer";
import useAskedDetail from "../hooks/useAskedDetail";
import * as S from "./styled";

type AskedModalProps = {
  memberId: number;
  onClose: () => void;
};

export default function AskedModal({ memberId, onClose }: AskedModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);
  useHiddenScroll(modalRef);
  const { messages, sender, receiver, nickname, onFetchData } =
    useAskedDetail(memberId);

  return (
    <Modal isMounted={true}>
      <S.Layout ref={modalRef}>
        <S.ModalHeader>
          <span>{nickname}</span>
          <S.CloseButton onClick={onClose}>
            <XCloseIcon />
          </S.CloseButton>
        </S.ModalHeader>
        <MessageContainer
          nickname={nickname}
          messages={messages}
          memberId={memberId}
          sender={sender}
          receiver={receiver}
          onFetchData={onFetchData}
        />
      </S.Layout>
    </Modal>
  );
}
