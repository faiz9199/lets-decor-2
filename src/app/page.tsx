import Slider from "@/components/layout/Slider";
import Services from "@/components/layout/Services";
import Testimonial from "@/components/layout/Testimonial";
import data from "../data.json"

export default function Home() {
  return (
    <main>
      <Slider data={data}/>
      <Services/>
      <Testimonial/>
    </main>
  );
}
