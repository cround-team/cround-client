import { conversionPlatform } from "@/utils/conversion";
import * as S from "./styled";

type ListItemProps = {
  isChecked: boolean;
  item: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ListItem({
  isChecked,
  name,
  item,
  onChange,
}: ListItemProps) {
  return (
    <S.ListItem>
      <S.Label>
        <S.Input
          aria-hidden="true"
          type="radio"
          name={name}
          value={item}
          onChange={onChange}
        />
        <span>{conversionPlatform(item)}</span>
        <S.SelectBox aria-checked={isChecked ? "true" : "false"} />
      </S.Label>
    </S.ListItem>
  );
}
