"use client"
import React,{useEffect} from "react";
import Card from "../ui/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const data = [
    {
      id: 1,
      image: "/rrw.jpg", 
    },
    {
      id: 2,
      image: "/IMG-20240803-WA0021.jpg",
    },
    {
      id: 3,
      image: "/IMG-20240803-WA0010.jpg",
    },
    {
      id: 4,
      image: "/IMG_7020.JPG",
    },
  ];

  return (
    <div data-aos="fade-right" data-aos-duration="2000">
    <p className="md:mx-12 mx-6 my-8 md:text-3xl text-xl text-center font-semibold">Some of the following Services we offer</p>
    <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 mx-6 md:mx-12">
      {data.map((dat) => (
        <Card key={dat.id} data={dat} />
      ))}
    </div>
    </div>
  );
};

export default Services;
