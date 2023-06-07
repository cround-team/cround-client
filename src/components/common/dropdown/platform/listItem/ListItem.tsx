import * as S from "./styled";

type ListItemProps = {
  isChecked: boolean;
  item: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ListItem({ isChecked, item, onChange }: ListItemProps) {
  return (
    <S.ListItem>
      <S.Label>
        <S.Input
          aria-hidden="true"
          type="radio"
          name="platform"
          value={item}
          onChange={onChange}
        />
        <span>{item}</span>
        <S.SelectBox aria-checked={isChecked ? "true" : "false"} />
      </S.Label>
    </S.ListItem>
  );
}
