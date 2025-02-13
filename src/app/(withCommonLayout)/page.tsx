import HeroSection from "@/components/Ui/Homepage/HeroSection/HeroSection";
import HowItWorks from "@/components/Ui/Homepage/HowItWorks/HowItWorks";
import Specialist from "@/components/Ui/Homepage/Specialist/Specialist";
import Stats from "@/components/Ui/Homepage/Stats/Stats";
import TopRatedDoctors from "@/components/Ui/Homepage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/Homepage/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
}
