import React from "react";
import CardTemplates from "./../UI/CardTemplates";
import leadershipData from "./leadershipData";

const Aboutleadership = () => {
  return (
    <section className="min-h-screen flex items-center justify-cente py-4  md:mt-0  ">
      <div className=" container mx-auto px-4">
        <div className="flex items-center justify-between w-full mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            leader <span className="text-[#13C3CE]">ship</span>
          </h2>
          <a
            href="#"
            className="text-gray-500 text-base font-medium hover:text-[#13C3CE] transition-all">
            View all &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {leadershipData.map((item, idx) => (
            <CardTemplates
              key={idx}
              img={item.img}
              name={item.name}
              title={item.title}
              button={item.button}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutleadership;
