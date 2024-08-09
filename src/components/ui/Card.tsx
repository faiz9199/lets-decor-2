import React from "react";
import { Button } from "./button";

interface CardProps {
  data: {
    id: number;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={data.image} alt={`Image ${data.id}`} />

      <div className="p-2">
        <h5 className="mb-2 md:text-xl text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology
        </h5>

        <p className="mb-3 text-xs md:font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far...
        </p>
        <Button size={"sm"}>Read More</Button>
      </div>
    </div>
  );
};

export default Card;
