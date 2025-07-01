import React from "react";
import aboutTreadingActionImage from "@/assets/images/about/Ourmission.svg";
import Btn from "@/components/common/Btn";

const AboutTreadingAction = () => {
  return (
    <div className=" min-h-screen py-8 px-2 flex flex-col items-center">

      {/* Stats */}
      <div className="w-full max-w-5xl flex flex-col items-start mb-8">
        
        <div className="w-full max-w-5xl flex flex-col items-start mb-8">

          <span className="text-gray-800 text-lg font-normal">
            Treading <span className="text-cyan-500 font-medium">Action</span>
          </span>
        </div>
        <div className="w-full max-w-5xl flex flex-row justify-between mb-12 gap-6 flex-wrap md:flex-nowrap">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className=" rounded-lg shadow-md flex flex-col items-center justify-center w-60 h-24 min-w-[180px] flex-1 mx-auto mb-4 md:mb-0">
              <span className="text-gray-800 text-2xl font-semibold">
                $45,345,654
              </span>
              <span className="text-xs font-bold text-gray-700 mt-2 tracking-widest">
                ALL TIME TRADE VALUE
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Mission Section */}
      <div className="w-full  max-w-5xl flex flex-col items-center md:items-start mb-8">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mt-8 bg-transparent gap-8 md:gap-0">
          {/* Centered image with gradient border using CSS */}
          <div
            className="about-gradient-border flex-shrink-0 flex items-center justify-center mx-auto md:mx-0"
            style={{
              width: "min(410.92px,90vw)",
              height: "min(380.89px,80vw)",
              minWidth: "220px",
              minHeight: "180px",
            }}>
            <div className="about-image-centered">
              <img
                src={aboutTreadingActionImage}
                alt="Handshake"
                className="about-image"
              />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 md:ml-12 flex flex-col items-center  text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
              Our <span className="text-primryBtn font-medium">mission</span>
            </h2>
            <p className="text-gray-500 text-base font-normal mb-6 max-w-xl">
              At Typeform, we give forms a better look and feel—so our customers
              can get more out of them. Historically, forms haven't been great,
              but businesses need them and people can't avoid them.
            </p>
            <div>
              <Btn text="End out Mood" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTreadingAction;
