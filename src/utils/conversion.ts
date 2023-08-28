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

export function conversionPlatform(platforms: string[] | string) {
  const getPlatformName = (platform: string) => {
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

      case "BLOG":
        return "블로그";

      case "PODCAST":
        return "팟캐스트";

      case "SPOON":
        return "스푼";

      case "ZEPETTO":
        return "제페토";

      case "EMOTICON":
        return "이모티콘";

      case "WEBTOON":
        return "웹툰";

      case "NFT":
        return "nft";

      default:
        return platform;
    }
  };
  if (Array.isArray(platforms)) {
    return platforms.map((platform) => {
      return getPlatformName(platform);
    });
  } else {
    return getPlatformName(platforms);
  }
}

export function conversionEnPlatform(platforms: string[] | string) {
  const getPlatformName = (platform: string) => {
    switch (platform) {
      case "인스타그램":
        return "INSTAGRAM";

      case "유튜브":
        return "YOUTUBE";

      case "틱톡":
        return "TIKTOK";

      case "트위치":
        return "TWITCH";

      case "아프리카TV":
        return "AFREECATV";

      case "블로그":
        return "BLOG";

      case "팟캐스트":
        return "PODCAST";

      case "스푼":
        return "SPOON";

      case "제페토":
        return "ZEPETTO";

      case "이모티콘":
        return "EMOTICON";

      case "웹툰":
        return "WEBTOON";

      case "nft":
        return "NFT";

      default:
        return platform;
    }
  };
  if (Array.isArray(platforms)) {
    return platforms.map((platform) => {
      return getPlatformName(platform);
    });
  } else {
    return getPlatformName(platforms);
  }
}
