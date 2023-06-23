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
