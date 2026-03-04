type SwiperNavButtonProps = {
  direction: "next" | "prev"
  className?: string
  customClass?: string
}

const SwiperNavButton = ({
  direction,
  className = "",
  customClass = "",
}: SwiperNavButtonProps) => {
  const isNext = direction === "next"
  const positionClass = isNext ? "swiper-button-next" : "swiper-button-prev"

  const baseClasses = "after:content-none h-8! w-8! bg-surface-base-extra-light rounded-full text-content-default! flex! items-center! justify-center! hover:text-content-primary! hover:bg-surface-light lcai-transition"


  return (
    <div className={`${baseClasses} ${positionClass} ${customClass} ${className} [&_.swiper-navigation-icon]:max-h-3.5`}>
      {/* {
        isNext ? <ChevronRight /> : <ChevronLeft />
      } */}
    </div>
  )
}

export default SwiperNavButton