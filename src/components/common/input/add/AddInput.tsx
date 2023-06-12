import { Label } from "@/components/common";
import { PlusIcon } from "@/assets/icons";
import * as S from "./styled";

type Inputs = {
  id: string;
  value: string;
};

type AddInputProps = {
  inputs: Inputs[];
  tipMessage?: string;
  label: string;
  className?: string;
  placeholder: string;
  maxCount: number;
  onAddInput: () => void;
  onChangeInput: (
    id: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveInput: (id: string) => void;
};

export default function AddInput({
  inputs,
  tipMessage = "",
  label,
  className,
  placeholder,
  maxCount,
  onAddInput,
  onChangeInput,
  onRemoveInput,
}: AddInputProps) {
  return (
    <S.Container className={className} tipMessage={tipMessage}>
      <Label label={label} tipMessage={tipMessage} />
      {inputs.map((item, idx) => (
        <div key={item.id}>
          <S.Input
            autoFocus={idx === 0}
            placeholder={placeholder}
            onChange={onChangeInput(item.id)}
          />
          {idx > 0 && (
            <button onClick={() => onRemoveInput(item.id)}>
              임시 삭제 버튼
            </button>
          )}
        </div>
      ))}
      <S.Button
        type="button"
        disabled={inputs.length >= maxCount}
        onClick={onAddInput}
      >
        <PlusIcon />
      </S.Button>
    </S.Container>
  );
}
