import BestSeller from "@/components/home/BestSeller";
import Brands from "@/components/home/Brands";
import Categories from "@/components/home/Categories";
import HeroSlider from "@/components/home/HeroSlider";
import IconBoxes from "@/components/home/IconBoxes";
import Lookbook from "@/components/home/LookBook";
import Marquee from "@/components/home/Marquee";
import ShopGram from "@/components/home/ShopGram";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Marquee />
      <IconBoxes />
      <Categories />
      <BestSeller />
      <Lookbook />
      <Testimonials />
      <Brands />
      <ShopGram />
    </div>
  );
}
