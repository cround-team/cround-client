import Tag from "@/components/common/tag/Tag";
import * as S from "./styled";

const TAGS = [
  "ASMR",
  "가성비",
  "꿀팁 가득",
  "장비 집중",
  "유튜버",
  "방음",
  "카메라",
];

export default function Introduce() {
  return (
    <S.Section>
      <h3>ASMR 유튜버로 활동 중인 코코입니다~!</h3>
      <p>
        안녕하세요! ASMR 콘텐츠로 유튜브를 운영하고 있는 코코입니다! ASMR
        크리에이터로 활동을 시작해보고 싶은데 장비 선정부터 막막함을 느끼는
        분들! 제게 여러 꿀팁을 받아가세요~!
      </p>
      <Tag tags={TAGS} />
    </S.Section>
  );
}
