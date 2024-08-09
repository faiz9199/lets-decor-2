import Image from "next/image";
import aboutus from "../../../public/aboutus.jpg";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="flex flex-col items-center m-6 md:m-12">
      <p className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-center md:text-left">
        “It’s All In The Details!” – My Motto
      </p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
        <div className="w-full md:w-2/5">
          <Image src={aboutus} alt="image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            doloribus molestias facere. Ducimus accusantium perferendis eveniet
            repudiandae molestias vel modi perspiciatis! Fugit fugiat ullam
            numquam culpa quae dolor eveniet praesentium, voluptatem id maxime
            harum saepe porro atque sint ut debitis. Earum cum voluptatibus
            temporibus exercitationem, veniam facilis nam sapiente sint libero
            enim amet! Eveniet nostrum quia soluta iure ipsam quo facere maxime
            fuga cupiditate architecto? Animi minus tempora quia perspiciatis
            eos consequuntur ut voluptatibus omnis doloremque tempore dolor
            nihil accusantium vero ratione, aliquid expedita ipsa aspernatur
            eum? Excepturi vero quas animi, numquam ad quasi consectetur
            distinctio assumenda maiores tempora blanditiis nesciunt asperiores,
            aut quos temporibus in sunt voluptatum illo odit est minus inventore
            fugiat quisquam.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
