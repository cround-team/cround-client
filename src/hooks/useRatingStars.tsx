import { ReactElement, useEffect, useState } from "react";

import { RatingStarIcon } from "@/assets/icons";
import { theme } from "@/styles";

const useRatingStarts = (rating: number): ReactElement[] => {
  const [stars, setStars] = useState<ReactElement[]>([]);

  useEffect(() => {
    const MAX = 5;
    const fullStars = Math.floor(rating);
    // const isHalf = rating % 1 !== 0;
    const stars = [];

    /* 먼저, 가득 찬 별 배열에 담기 */
    for (let i = 0; i < fullStars; i++) {
      stars.push(<RatingStarIcon key={i} fill={theme.colors.rating} />);
    }

    // /* 반개 별 담기 */
    // isHalf && stars.push(<RatingStarIcon key="half" />);
    // const remainingStars = MAX - fullStars - (isHalf ? 1 : 0);

    const remainingStars = MAX - fullStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <RatingStarIcon key={`empty-${i}`} fill={theme.colors.neutral100} />
      );
    }

    setStars(stars);
  }, [rating]);

  return stars;
};

export default useRatingStarts;
