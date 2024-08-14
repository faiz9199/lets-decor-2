import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

// Define the Category interface
interface Category {
  id: number;
  name: string;
  photos: number;
  imageLink: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col max-w-xs p-3 rounded-lg shadow-lg my-4 mx-auto">
      <div className="object-cover">
        <Image
          className="rounded-lg"
          src={category.imageLink}
          alt={category.name}
          width={400}
          height={300}
        />
      </div>
      <div className="mt-6 ml-3">
        <p className="text-xl font-bold mb-2">{category.name}</p>
        <div className="flex items-center">
          <p className="text-base font-semibold">{category.photos}</p>
          <p>
            <MdKeyboardArrowRight size={18}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
