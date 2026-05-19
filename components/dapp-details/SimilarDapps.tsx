"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButton from "@/components/ui/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperEdgeState } from "@/hooks/useSwiperEdgeState";
import { DappCardMini } from "@/components/dapp-card/DappCardMini";
import type { DappCardProps } from "@/components/dapp-card/DappCard";

type SimilarDappsProps = {
  dapps: DappCardProps[];
};

const SimilarDapps = ({ dapps }: SimilarDappsProps) => {
  const { handleSwiper } = useSwiperEdgeState();

  if (!dapps || dapps.length === 0) return null;

  return (
    <div className="relative w-full space-y-2 md:space-y-3">
      <div className="flex gap-4 items-center justify-between">
        <h2 className="text-lg font-semibold leading-[1.2] tracking-[-0.18px] text-content-ultra">
          Similar dApps
        </h2>
        <div className="w-19 h-10 flex items-center justify-between">
          <SwiperNavButton
            direction="prev"
            customClass="lcai-dapp-prev"
            className="static! z-20! m-0!"
          />
          <SwiperNavButton
            direction="next"
            customClass="lcai-dapp-next"
            className="static! z-20! m-0!"
          />
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        speed={600}
        navigation={{
          nextEl: ".lcai-dapp-next",
          prevEl: ".lcai-dapp-prev",
        }}
        modules={[Navigation]}
        onSwiper={handleSwiper}
      >
        {dapps.map((dapp, idx) => (
          <SwiperSlide
            key={dapp.id}
            className={`max-w-[426px] ${
              idx === dapps.length - 1 ? "mr-0" : "mr-5"
            }`}
          >
            <DappCardMini
              id={dapp.id}
              name={dapp.name}
              description={dapp.description}
              tags={dapp.tags}
              iconSrc={dapp.iconSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarDapps;
