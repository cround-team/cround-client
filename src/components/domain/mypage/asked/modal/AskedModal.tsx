import { useRef } from "react";

import { XCloseIcon } from "@/assets/icons";
import { useClickOutside, useHiddenScroll } from "@/hooks";
import { Modal } from "@/components/common";
import MessageContainer from "../container/MessageContainer";
import useAskedDetail from "../hooks/useAskedDetail";
import * as S from "./styled";

type AskedModalProps = {
  onClose: () => void;
};

export default function AskedModal({ onClose }: AskedModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, onClose);
  useHiddenScroll(modalRef);
  const {
    messages,
    sender,
    receiver,
    creatorNickname,
    platformHeadType,
    platformHeadTheme,
    profileImage,
  } = useAskedDetail();

  console.log("receiver", receiver);

  return (
    <Modal isMounted={true}>
      <S.Layout ref={modalRef}>
        <S.CloseButton onClick={onClose}>
          <XCloseIcon />
        </S.CloseButton>
        <MessageContainer
          creatorNickname={creatorNickname}
          platformHeadType={platformHeadType}
          platformHeadTheme={platformHeadTheme}
          messages={messages}
          profileImage={profileImage}
          sender={sender}
          receiver={receiver}
        />
      </S.Layout>
    </Modal>
  );
}
