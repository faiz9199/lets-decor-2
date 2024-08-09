import React from "react";
import Card from "../ui/Card";

const Services: React.FC = () => {
  const data = [
    {
      id: 1,
      image: "/decor1.jpg", 
    },
    {
      id: 2,
      image: "/decor1.jpg",
    },
    {
      id: 3,
      image: "/decor1.jpg",
    },
    {
      id: 4,
      image: "/decor1.jpg",
    },
  ];

  return (
    <>
    <p className="md:mx-12 mx-6 my-8 md:text-3xl text-xl text-center font-semibold">Some of the following Services we offer</p>
    <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 mx-6 md:mx-12">
      {data.map((dat) => (
        <Card key={dat.id} data={dat} />
      ))}
    </div>
    </>
  );
};

export default Services;
