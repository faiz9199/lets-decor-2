import Image from "next/image";
import about from "../../../../public/aboutus.jpg";

const page = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto p-4">
      <div>
        <p className="md:text-4xl text-2xl font-bold text-center my-10">
          “It’s All In The Details!” – My Motto
        </p>
      </div>
      <div>
        <Image src={about} alt="image" />
      </div>
      <div>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolorem officiis cumque corporis magni aliquid quas itaque nulla
          dolores molestiae! Ullam, illum amet quod expedita officiis nemo quas
          quis quidem adipisci a animi? Repellendus ducimus doloremque molestias
          ad nemo et, est vel, veniam blanditiis dignissimos ratione odio odit
          temporibus tenetur eaque veritatis impedit cumque autem placeat
          laboriosam animi a nihil quisquam dolorem! Laudantium non, cumque
          harum labore omnis ratione quis. Maxime eaque modi facilis ab
          reprehenderit repellat consectetur sunt amet? Perspiciatis iure et,
          eius sapiente soluta at pariatur cumque expedita dignissimos quia
          saepe fuga, nesciunt similique magni consequatur autem in sint? Omnis
          debitis, non, perspiciatis saepe quidem officiis, modi accusamus
          dignissimos perferendis iure quae. Ipsum, architecto expedita
          inventore totam omnis voluptate qui mollitia molestiae. Dolore eos a
          explicabo, error expedita ad inventore praesentium molestias
          repudiandae, eligendi reprehenderit voluptatem, vero corrupti natus!
          Doloremque vitae consequuntur, blanditiis nisi a corporis voluptatibus
          animi aliquam praesentium ratione nesciunt quod non in eos magnam.
        </p>
      </div>
    </div>
  );
};
export default page;
