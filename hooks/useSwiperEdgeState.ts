"use client";

import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";

export function useSwiperEdgeState() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: SwiperClass) => {
    // set initial states
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });

    swiper.on("reachBeginning", () => setIsBeginning(true));
    swiper.on("reachEnd", () => setIsEnd(true));
    swiper.on("fromEdge", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return { isBeginning, isEnd, handleSwiper };
}
