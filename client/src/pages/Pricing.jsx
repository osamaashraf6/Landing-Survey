import React from "react";
import PricingHeader from "@/components/Pricing/pricingHeader";
import PricingCards from "../components/Pricing/PricingCards";

const Pricing = () => {
  return <section className=" ">
    <div className="container">
    <PricingHeader />
    <PricingCards/>
    </div>
  </section>
};

export default Pricing;
