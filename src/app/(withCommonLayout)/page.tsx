import HeroSection from "@/components/Ui/Homepage/HeroSection/HeroSection";
import Specialist from "@/components/Ui/Homepage/Specialist/Specialist";
import TopRatedDoctors from "@/components/Ui/Homepage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/Homepage/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
}
