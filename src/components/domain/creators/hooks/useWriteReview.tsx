import { creatorWriteReivewApi } from "@/utils/api";
import { useState } from "react";

const INITIAL_STARS = [
  {
    index: 0,
    status: false,
  },
  {
    index: 1,
    status: false,
  },
  {
    index: 2,
    status: false,
  },
  {
    index: 3,
    status: false,
  },
  {
    index: 4,
    status: false,
  },
];

type useWriteReviewProps = {
  creatorId: number;
  onFetchData?: (id?: number) => void;
  onClose: () => void;
};

export default function useWriteReview({
  creatorId,
  onFetchData,
  onClose,
}: useWriteReviewProps) {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(INITIAL_STARS);

  const rating = stars.filter((star) => star.status).length;
  const isDisabledSubmit = !review;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        creatorId,
        content: review,
        rating,
      };
      const response = await creatorWriteReivewApi(body);
      console.log("response", response);
      if (response.status === 201) {
        onClose();
        onFetchData && onFetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStarClick = (
    e: React.MouseEvent,
    status: boolean,
    index: number
  ) => {
    e.stopPropagation();
    if (status) {
      setStars((prev) =>
        prev.map((star) => {
          if (star.index > index) {
            return {
              ...star,
              status: false,
            };
          } else {
            return star;
          }
        })
      );
    } else {
      setStars((prev) =>
        prev.map((star) => {
          if (star.index <= index) {
            return {
              ...star,
              status: true,
            };
          } else {
            return star;
          }
        })
      );
    }
  };

  return {
    isDisabledSubmit,
    review,
    stars,
    handleChange,
    handleSubmit,
    handleStarClick,
  };
}
