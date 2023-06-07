import Label from "../../label/Label";
import * as S from "./styled";

type RegisterInputProps = {
  //label
  tipMessage?: string;
  label: string;

  autoFocus?: boolean;
  className?: string;
  type?: "text";
  id: string;
  name: string;
  placeholder: string;
  validMessage?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RegisterInput({
  tipMessage = "",
  label,

  autoFocus = false,
  className,
  type = "text",
  id,
  name,
  placeholder,
  validMessage = "",
  errorMessage = "",
  onChange,
}: RegisterInputProps) {
  return (
    <S.Container className={className} tipMessage={tipMessage}>
      <Label label={label} tipMessage={tipMessage} />
      <S.Input
        aria-invalid={errorMessage ? "false" : "true"}
        aria-errormessage="err"
        autoFocus={autoFocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {validMessage && <S.ValidMessage>{validMessage}</S.ValidMessage>}
      {errorMessage && (
        <S.ErrorMessage id="err" role="alert">
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Container>
  );
}
