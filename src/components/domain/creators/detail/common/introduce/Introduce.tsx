import { Tag } from "@/components/common";
import * as S from "./styled";

type IntroduceProps = {
  creatorNickname: string;
  description: string;
  tags: string[];
};

export default function Introduce({
  creatorNickname,
  description,
  tags,
}: IntroduceProps) {
  return (
    <S.Section>
      <h3>{creatorNickname}님의 인사말</h3>
      <p>{description}</p>
      <Tag tags={tags} />
    </S.Section>
  );
}
