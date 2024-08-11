import Image from "next/image";
import cover1 from "../../../../public/cover1.jpg";

const page = () => {
  return (
    <div>
      <div className="md:flex-row flex flex-col w-full gap-12 md:p-10 p-6 items-start overflow-hidden">
        <div className="md:w-1/2">
          <Image src={cover1} alt="image" className="object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl mb-4">Wedding</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cum magni, architecto dignissimos enim iure, voluptates dolor quod
            quasi sapiente labore neque, incidunt delectus atque accusantium
            officia unde libero nam minima ex esse est assumenda? Esse tempore
            tenetur libero at nesciunt consequatur eaque vel sint architecto eos
            similique doloremque, ad illo! Architecto est necessitatibus animi
            inventore laboriosam blanditiis voluptas atque. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet cum magni, architecto
          </p>
        </div>
      </div>
      <div className="md:flex-row-reverse flex flex-col w-full gap-12 md:p-10 p-6 items-start overflow-hidden">
        <div className="md:w-1/2">
          <Image src={cover1} alt="image" className="object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl mb-4">Birthday</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cum magni, architecto dignissimos enim iure, voluptates dolor quod
            quasi sapiente labore neque, incidunt delectus atque accusantium
            officia unde libero nam minima ex esse est assumenda? Esse tempore
            tenetur libero at nesciunt consequatur eaque vel sint architecto eos
            similique doloremque, ad illo! Architecto est necessitatibus animi
            inventore laboriosam blanditiis voluptas atque. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet cum magni, architecto
            dignissimos enim iure, voluptates dolor quod quasi sapiente labore
          </p>
        </div>
      </div>
      <div className="md:flex-row flex flex-col w-full gap-12 md:p-10 p-6 items-start overflow-hidden">
        <div className="md:w-1/2">
          <Image src={cover1} alt="image" className="object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl mb-4">Corporate Events</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cum magni, architecto dignissimos enim iure, voluptates dolor quod
            quasi sapiente labore neque, incidunt delectus atque accusantium
            officia unde libero nam minima ex esse est assumenda? Esse tempore
            tenetur libero at nesciunt consequatur eaque vel sint architecto eos
            similique doloremque, ad illo! Architecto est necessitatibus animi
            inventore laboriosam blanditiis voluptas atque. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet cum magni, architecto
            dignissimos enim iure, voluptates dolor quod quasi sapiente labore
            neque, incidunt delectus atque accusantium officia unde libero nam
          </p>
        </div>
      </div>
      <div className="md:flex-row-reverse flex flex-col w-full gap-12 md:p-10 p-6 items-start overflow-hidden">
        <div className="md:w-1/2">
          <Image src={cover1} alt="image" className="object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-3xl mb-4">Baby Shower</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cum magni, architecto dignissimos enim iure, voluptates dolor quod
            quasi sapiente labore neque, incidunt delectus atque accusantium
            officia unde libero nam minima ex esse est assumenda? Esse tempore
            tenetur libero at nesciunt consequatur eaque vel sint architecto eos
            similique doloremque, ad illo! Architecto est necessitatibus animi
            inventore laboriosam blanditiis voluptas atque. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet cum magni, architecto
            dignissimos enim iure, voluptates dolor quod quasi sapiente labore
            neque, incidunt delectus atque accusantium officia unde libero nam
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
