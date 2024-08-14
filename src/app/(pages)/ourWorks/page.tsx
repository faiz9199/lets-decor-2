import CategoryCard from "@/components/layout/CategoryCard";

const Page = () => {
  const categories = [
    {
      id: 1,
      name: "Salman's Engagement",
      photos: 1234,
      imageLink: "/cover1.jpg",
    },
    {
      id: 2,
      name: "Kittu's Birthday",
      photos: 5678,
      imageLink: "/cover4.jpg",
    },
    {
      id: 3,
      name: "Sonu's Engagement",
      photos: 91011,
      imageLink: "/cover5.jpg",
    },
  ];
  return (
    <div>
      <p className="text-2xl text-center mt-6 font-semibold uppercase">Our Works</p>
      <div className="grid md:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Page;
