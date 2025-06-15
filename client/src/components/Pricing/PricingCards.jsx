import React from "react";
import { plans } from "@/utils/data";
import { Button } from "@/components/UI/button";
import * as Icons from "@/assets/icons/Icons";

function PricingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-[120px] ">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={` px-[40px] py-[40px] text-black rounded-2xl   shadow-[8px_8px_10px_8px_#e2e8f0] ${
            plan.highlighted
              ? "bg-[#00B7C1] text-white  md:-translate-y-15"
              : "bg-white text-black"
          }`}
        >
          <h1 className="font-bold text-[25px] mb-[25px]">{plan.title}</h1>
          <p
            className={`text-gray-500 mb-[30px] ${
              plan.highlighted ? "  text-white " : "text-[#00B7C1]"
            }`}
          >
            {plan.description}
          </p>
          <p className=" font-bold text-[45px] ">
            {`$${plan.price} `}{" "}
            <span
              className={`text-gray-500 font-normal text-[20px] ${
                plan.highlighted ? "  text-white " : "text-[#00B7C1]"
              }`}
            >
              /monthly
            </span>
          </p>
          <p
            className={`mb-[15px] text-black font-bold text-[18px] py-[10px] ${
              plan.highlighted ? "  text-white " : "text-[#00B7C1]"
            } `}
          >
            {plan.subText}
          </p>
          <ul>
            {plan.features.map((feature, id) => (
              <div className="flex items-center gap-2 mb-[20px]" key={id}>
                <Icons.HiCheck
                  className={` p-[2px] w-[22px] h-[22px] font-bold rounded-[50%] ${
                    plan.highlighted
                      ? "text-[#00B7C1] bg-white"
                      : "bg-[#00B7C1] text-white"
                  }`}
                />
                <li>{feature}</li>
              </div>
            ))}
          </ul>
          <Button
            className={`w-full rounded-4xl h-[70px] cursor-pointer my-[20px] text-[20px] ${
              plan.highlighted
                ? "text-[#00B7C1] bg-white hover:bg-[#ffffffd3] hover:text-[#00B7C1]"
                : "bg-[#00B7C1] text-white hover:bg-[#00b7c1d4] hover:text-white"
            }`}
          >
            {" "}
            Choose plan
          </Button>
        </div>
      ))}
    </div>
  );
}

export default PricingCards;
