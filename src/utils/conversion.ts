export function conversionSort(sort: string) {
  switch (sort) {
    case "신규순":
      return "latest";

    case "팔로워순":
      return "follow";

    case "좋아요순":
      return "like";

    case "북마크순":
      return "bookmark";

    case "리뷰순":
      return "review";

    default:
      return "";
  }
}

export function conversionUserType(roleName: string) {
  switch (roleName) {
    case "회원":
      return "member";

    case "크리에이터":
      return "creator";

    default:
      return "nonMember";
  }
}

export function conversionPlatform(platforms: string[]) {
  return platforms.map((platform) => {
    switch (platform) {
      case "INSTAGRAM":
        return "인스타그램";

      case "YOUTUBE":
        return "유튜브";

      case "TIKTOK":
        return "틱톡";

      case "TWITCH":
        return "트위치";

      case "AFREECATV":
        return "아프리카TV";

      case "blog":
        return "블로그";

      case "PODCAST":
        return "팟캐스트";

      case "SPOON":
        return "스푼";

      case "ZEPETO":
        return "제페토";

      case "EMOTICON":
        return "이모티콘";

      case "WEBTOON":
        return "웹툰";

      case "NFT":
        return "nft";

      default:
        return "플랫폼 네이밍 오류";
    }
  });
}
