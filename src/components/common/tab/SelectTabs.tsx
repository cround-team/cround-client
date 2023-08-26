import * as S from "./styled";

type SelectTabProps = {
  className?: string;
  tabs: string[];
  selected: string;
  onClickTab: (selected: string) => void;
};

export default function SelectTabs({
  className,
  tabs,
  selected,
  onClickTab,
}: SelectTabProps) {
  return (
    <S.ListContainer className={className}>
      {tabs.map((tab) => (
        <S.List key={tab} aria-selected={tab === selected ? "true" : "false"}>
          <button onClick={() => onClickTab(tab)}>{tab}</button>
        </S.List>
      ))}
    </S.ListContainer>
  );
}
