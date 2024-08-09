import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-2 border border-slate-300 max-w-xs p-5">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
        <p className="text-sm font-semibold">Faiz Ahmad</p>
        <p className="text-xs">12/12/20024</p>
        </div>
      </div>
      <div className="">⭐⭐⭐⭐⭐</div>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a
          accusantium, alias ullam in, itaque quas laborum quasi velit assumenda
          repellendus
        </p>
      </div>
    </div>
  );
};
export default TestimonialCard;
