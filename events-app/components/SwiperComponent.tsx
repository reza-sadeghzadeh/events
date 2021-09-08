import EventCreator from "./EventCreator";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { useEffect, useState } from "react";

interface SwiperComponentProps {
  events: [];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  events: closestEvents,
}) => {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setPerView(Math.floor(window.innerWidth / 450));
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={perView < 2 ? 0 : -100}
      slidesPerView={perView}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
    >
      {closestEvents.map((event: any) => (
        <SwiperSlide key={event.id}>
          <EventCreator moreDetails={false} events={[event]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperComponent;
