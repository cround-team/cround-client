import * as S from "./styled";

type SelectTabProps = {
  tabs: string[];
  selected: string;
  onTabClick: (selected: string) => void;
};

export default function SelectTabs({
  tabs,
  selected,
  onTabClick,
}: SelectTabProps) {
  return (
    <S.ListContainer>
      {tabs.map((tab, idx) => (
        <S.List key={tab} aria-selected={tab === selected ? "true" : "false"}>
          <button onClick={() => onTabClick(tab)}>{tab}</button>
        </S.List>
      ))}
    </S.ListContainer>
  );
}
