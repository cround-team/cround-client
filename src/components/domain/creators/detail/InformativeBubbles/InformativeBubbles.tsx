import { SmileIcon } from "@/assets/icons";
import * as S from "./styled";

export default function InformativeBubbles() {
  return (
    <S.Container>
      <S.Wrapper>
        <p>
          도움이 되었다면?!
          <br />
          코코님 채널의 구독자가 되어주세요!
        </p>
        <a href="www.youtube.com">www.youtube.com</a>
      </S.Wrapper>
      <SmileIcon />
    </S.Container>
  );
}
