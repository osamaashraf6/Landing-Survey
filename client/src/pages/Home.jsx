import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import JournyPlan from "@/components/Home/JournyPlan/JournyPlan";
import Templets from "@/components/Home/Templets/Templets";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const {theme}= useContext(ThemeContext)
  return <>
    <Hero />
    <section className={`${theme === 'dark' ? "" : "bg-gray-50 "}py-4`}>
      <HowItWorks />
      <Templets />
      <JournyPlan/>

    </section>
  </>;
};

export default Home;
