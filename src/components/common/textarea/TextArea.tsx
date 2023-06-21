import * as S from "./styled";
import Label from "../label/Label";

type TextAreaProps = {
  className?: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  className,
  id,
  name,
  value,
  placeholder,
  label,
  onChange,
}: TextAreaProps) {
  return (
    <S.Container className={className}>
      <Label label={label} />
      <S.TextArea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></S.TextArea>
    </S.Container>
  );
}
