import { SmileIcon } from "@/assets/icons";
import * as S from "./styled";

type InformativeBubblesProps = {
  creatorNickname: string;
  platformUrl: string;
};

export default function InformativeBubbles({
  creatorNickname,
  platformUrl,
}: InformativeBubblesProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <p>
          도움이 되었다면?!
          <br />
          {creatorNickname}님 채널의 구독자가 되어주세요!
        </p>
        <a href={platformUrl}>{platformUrl}</a>
      </S.Wrapper>
      <SmileIcon />
    </S.Container>
  );
}
