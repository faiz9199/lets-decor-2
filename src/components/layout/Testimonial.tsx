"use client";
import TestimonialCard from "../ui/TestimonialCard";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="md:m-12 m-6">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px (Mobile screens)
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px (Tablet screens)
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (Desktop screens)
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1280px (Larger screens)
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
