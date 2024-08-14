import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface CardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string; // Add a category field if needed for dynamic routing
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          className="object-cover h-full w-full"
          src={data.image}
          alt="image"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 md:text-xl text-base font-bold tracking-tight">
          {data.title}
        </h5>
        <p className="mb-6 text-sm md:text-base">{data.description}</p>
        <Link href="/services">
          <Button size={"sm"} className="w-full">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
