"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
}

interface SliderProps {
  data: Slide[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-full -mt-2 md:mt-0">
      <div className="h-96 md:h-screen">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-full w-full"
        >
          {data.map(({ id, image }) => (
            <SwiperSlide key={id} className="relative h-full w-full">
              <div
                className="h-full w-full"
                style={{
                  background: `url(${image}) center center / cover no-repeat`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
