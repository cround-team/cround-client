import { sendMessageApi } from "@/utils/api/mypage";
import React, { useCallback, useRef, useState } from "react";

export default function useMessage(id: number) {
  const [message, setMessage] = useState("");
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px"; // 초기 높이로 설정하여 콘텐츠 크기에 맞게 조정
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 104) + "px";
      textareaRef.current.style.overflowY =
        textareaRef.current.scrollHeight > 104 ? "scroll" : "hidden";
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    name === "message" && setMessage(value);
  };

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();

        const button = textareaRef.current
          ?.nextSibling as HTMLButtonElement | null;
        if (button && button.tagName === "BUTTON") {
          button.click();
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.length < 1) return;

    try {
      const body = {
        receiver: id,
        text: message,
      };
      const res = await sendMessageApi(body);
      console.log("res", res);
    } catch (error: any) {
      console.error(error);
    }
  };

  return {
    isTextareaFocused,
    message,
    textareaRef,
    handleResizeHeight,
    handleChange,
    handleTextareaFocus,
    handleTextareaBlur,
    handleKeyDown,
    handleSubmit,
  };
}
