import * as S from "./styled";

type InputProps = {
  autoFocus?: boolean;
  isVisibleLabel: boolean;
  isInvalid: boolean;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  inputMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  autoFocus = false,
  isVisibleLabel,
  label,
  id,
  inputMessage,
  name,
  placeholder,
  onChange,
  isInvalid = true,
}: InputProps) {
  return (
    <S.Container>
      <S.Label isVisibleLabel={isVisibleLabel}>{label}</S.Label>
      <S.Input
        autoFocus={autoFocus}
        isVisibleLabel={isVisibleLabel}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={isInvalid ? "true" : "false"}
        aria-errormessage="err"
      />

      {!isInvalid && inputMessage && (
        <S.ErrorMessage id="err" role="alert">
          {inputMessage}
        </S.ErrorMessage>
      )}

      {isInvalid && inputMessage && (
        <S.ValidMessage id="err" role="alert">
          {inputMessage}
        </S.ValidMessage>
      )}
    </S.Container>
  );
}
