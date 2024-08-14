"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialCard from "../ui/TestimonialCard";

// Define the type for the testimonial object
interface Testimonial {
  name: string;
  date: string;
  description: string;
  rating: number;  // New rating property
}

const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Faiz Ahmad",
      date: "12/12/2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores a accusantium.",
      rating: 5,
    },
    {
      name: "John Doe",
      date: "05/11/2023",
      description: "John's feedback about the service was overwhelmingly positive.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      date: "10/01/2024",
      description: "Jane loved the experience and mentioned the exceptional support she received.",
      rating: 5,
    },
    {
      name: "Alice Johnson",
      date: "15/07/2023",
      description: "Alice found the product quality to be excellent and highly recommends it.",
      rating: 4,
    },
    {
      name: "Bob Brown",
      date: "22/03/2024",
      description: "Bob was pleased with the timely delivery and the customer service provided.",
      rating: 5,
    },
  ];

  return (
    <div>
      <p className="text-4xl font-bold ml-10 mt-10">Testimonials</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard 
              name={testimonial.name} 
              date={testimonial.date} 
              description={testimonial.description} 
              rating={testimonial.rating}  // Pass the rating prop
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
