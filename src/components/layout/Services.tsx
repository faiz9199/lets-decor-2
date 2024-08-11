import Card from "../ui/Card";

const Services: React.FC = () => {

  const data = [
    {
      id: 1,
      title: "Wedding Decor",
      description:
        "Transforming dreams into reality, creating enchanting memories with every detail.",
      image: "/cover1.jpg",
      category: "wedding",
    },
    {
      id: 2,
      title: "Birthday Decor",
      description:
        "Crafting celebrations that sparkle with joy, tailor-made for each special year.",
      image: "/cover2.jpg",
      category: "birthday",
    },
    {
      id: 3,
      title: "Corporate Events Decor",
      description:
        "Infusing professionalism with elegance, setting the stage for successful gatherings.",
      image: "/cover3.jpg",
      category: "corporate-event",
    },
    {
      id: 4,
      title: "Baby Shower",
      description:
        "Welcoming bundles of joy with whimsical charm, every detail a sweet anticipation.",
      image: "/cover4.jpg",
      category: "bay-shower",
    },
  ];

  return (
    <div>
      <p className="md:mx-12 mx-6 my-8 md:text-3xl text-xl text-center font-semibold">
        Some of the following Services we offer
      </p>
      <div className="md:grid-cols-4 sm:grid-cols-2 grid justify-center gap-4 mx-6 md:mx-12">
        {data.map((dat) => (
          <Card key={dat.id} data={dat} />
        ))}
      </div>
    </div>
  );
};

export default Services;
