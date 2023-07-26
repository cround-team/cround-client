import { ArrowNarrowUpIcon } from "@/assets/icons";
import useMessage from "./hooks/useMessage";
import * as S from "./styled";

type AskedFormProps = {
  memberId: number;
};

export default function AskedForm({ memberId }: AskedFormProps) {
  const {
    isTextareaFocused,
    message,
    textareaRef,
    handleResizeHeight,
    handleChange,
    handleTextareaFocus,
    handleTextareaBlur,
    handleKeyDown,
    handleSubmit,
  } = useMessage(memberId);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.TextArea
        ref={textareaRef}
        id="message"
        name="message"
        value={message}
        placeholder="질문할 내용을 입력해주세요"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
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
