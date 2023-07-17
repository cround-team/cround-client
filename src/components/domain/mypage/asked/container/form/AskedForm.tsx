import { ArrowNarrowUpIcon } from "@/assets/icons";
import * as S from "./styled";
import { useCallback, useRef, useState } from "react";

export default function AskedForm() {
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

  const test = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("tt");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.TextArea
        ref={textareaRef}
        id="asked"
        name="asked"
        // value="dddasdffdaafdfadadfdfadfa"
        placeholder="질문할 내용을 입력해주세요"
        onKeyDown={handleKeyDown}
        onChange={test}
        onInput={handleResizeHeight}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
      />
      <S.SendButton aria-details={isTextareaFocused ? "true" : "false"}>
        <ArrowNarrowUpIcon />
      </S.SendButton>
    </S.Form>
  );
}
