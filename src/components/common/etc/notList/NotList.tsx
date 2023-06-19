import * as S from "./styled";

type NotListProps = {
  label: string;
  searched: string;
};

export default function NotList({ label, searched }: NotListProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Content>'{searched}'에 대한 검색 결과가 없습니다.</S.Content>
    </S.Container>
  );
}
