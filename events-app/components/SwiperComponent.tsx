import EventCreator from "./EventCreator";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Router from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

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
      // install Swiper modules
      modules={[Autoplay]}
      autoplay={Router ? true : false}
      spaceBetween={perView < 2 ? 0 : -100}
      slidesPerView={perView}
    >
      {closestEvents.map((event: any) => (
        <SwiperSlide key={event.id}>
          <EventCreator events={[event]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SwiperComponent;
