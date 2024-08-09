import Navbar from "@/components/layout/Navbar";
import Slider from "@/components/layout/Slider";
import data from "../data.json"
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Testimonial from "@/components/layout/Testimonial";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <Slider data={data}/>
      <About/>
      <Services/>
      <Testimonial/>
    </main>
  );
}
