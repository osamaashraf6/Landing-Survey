import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import JournyPlan from "@/components/Home/JournyPlan/JournyPlan";
import Templets from "@/components/Home/Templets/Templets";

const Home = () => {
  return <>
    <Hero />
    <section className="bg-gray-50 py-4">
      <HowItWorks />
      <Templets />
      <JournyPlan/>

    </section>
  </>;
};

export default Home;
