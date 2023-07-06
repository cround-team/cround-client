"use client";

import { useEffect, useState } from "react";

import { ArrowNarrowTopIcon } from "@/assets/icons";
import * as S from "./styled";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisible && (
      <S.Button onClick={handleScrollTotop}>
        <ArrowNarrowTopIcon />
      </S.Button>
    )
  );
}
