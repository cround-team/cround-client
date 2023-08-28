import { Label } from "@/components/common";
import { PlusIcon, XSmallIcon } from "@/assets/icons";
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
  onChangeInput: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <S.Container className={className} tipMessage={tipMessage}>
      <Label label={label} tipMessage={tipMessage} />
      <S.InputContainer>
        {inputs.map((item, idx) => (
          <S.InputWrapper key={item.id}>
            <S.Input
              placeholder={placeholder}
              onChange={(e) => onChangeInput(item.id, e)}
              onKeyDown={handleInputKeyDown}
              value={item.value}
            />
            {idx > 0 && (
              <S.RemoveButton onClick={() => onRemoveInput(item.id)}>
                <XSmallIcon />
              </S.RemoveButton>
            )}
          </S.InputWrapper>
        ))}
      </S.InputContainer>
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
