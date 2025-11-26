import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <Categories />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
