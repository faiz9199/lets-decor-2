import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Define the types for the props
interface TestimonialCardProps {
  name: string;
  date: string;
  description: string;
  rating: number;  // New rating prop
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, date, description, rating }) => {
  return (
    <div className="flex flex-col gap-2 shadow-lg max-w-xs md:max-w-lg p-6 my-10 mx-auto">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>{name.charAt(0)}{name.split(" ")[1]?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <div className="flex">
        {/* Dynamically render the stars based on the rating */}
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
      <div>
        <p className="text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
