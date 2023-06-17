import * as S from "./styled";

type SelectTabProps = {
  className?: string;
  tabs: string[];
  selected: string;
  onTabClick: (selected: string) => void;
};

export default function SelectTabs({
  className,
  tabs,
  selected,
  onTabClick,
}: SelectTabProps) {
  return (
    <S.ListContainer className={className}>
      {tabs.map((tab) => (
        <S.List key={tab} aria-selected={tab === selected ? "true" : "false"}>
          <button onClick={() => onTabClick(tab)}>{tab}</button>
        </S.List>
      ))}
    </S.ListContainer>
  );
}
