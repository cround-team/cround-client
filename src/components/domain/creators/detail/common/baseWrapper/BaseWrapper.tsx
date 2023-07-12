import { conversionPlatform } from "@/utils/conversion";
import * as S from "./styled";

type BaseWrapperProps = {
  creatorNickname: string;
  activityPlatforms: string[];
  platformHeadTheme: string;
};

export default function BaseWrapper({
  creatorNickname,
  activityPlatforms,
  platformHeadTheme,
}: BaseWrapperProps) {
  return (
    <S.Container>
      <S.Nickname>{creatorNickname}</S.Nickname>
      <S.PlatformThemeGroup>
        <span>{conversionPlatform(activityPlatforms).join(", ")}</span>
        <span>{platformHeadTheme}</span>
      </S.PlatformThemeGroup>
    </S.Container>
  );
}
