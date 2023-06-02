import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CustomProps = {
  children?: React.ReactNode;
};

export default function CustomSlick({ children }: CustomProps) {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    // centerPadding: "60px",
    // centerPadding: "20px",
  };

  return <Slider {...settings}>{children}</Slider>;
}
