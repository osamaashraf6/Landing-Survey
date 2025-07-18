import React from "react";
import Btn from "@/components/common/Btn";
import { Button } from "@/components/UI/button";
const HeroSection = ({
  title,
  description,
  primaryButtonText = "Create Your Survey",
  secondaryButtonText = "See How It Works",
  heroImage,
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-cente py-4  md:mt-0 bg-white ">
      <div className=" container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 items-center  gap-8  md:gap-4 lg:gap-8 ">
          {/* Left Content */}
          <div className="col-span-3 text-center   md:text-start ">
            <div className="flex flex-col justify-center items-center md:items-start h-full space-y-4 text-black font-poppins ">
              <h2 className="text-4xl leading-13 md:text-2xl lg:text-4xl font-semibold md:leading-10 lg:leading-13 font-poppins ">
                {title}
              </h2>
              <p className="text-lg leading-8 md:text-sm md:leading-6 lg:text-lg text-gray-400 lg:leading-8 font-normal">
                {description}
              </p>
              <div className=" flex gap-3 ">
                <Btn text={primaryButtonText} link={primaryButtonLink} />
                <Button
                  className={`bg-white border-2 border-primryBtn text-xs md:text-lg w-30 lg:w-52 py-3 px-5 rounded-xl text-primryBtn font-bold leading-8 capitalize transition-all  hover:bg-primryBtn hover:text-white `}
                  link={secondaryButtonLink}>
                  {secondaryButtonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-3   ">
            <div className=" w-full flex items-center justify-center overflow-hidden">
              <img
                src={heroImage}
                alt="Hero"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// HeroSection.propTypes = {
//   title: PropTypes.node.isRequired,
//   description: PropTypes.string.isRequired,
//   primaryButtonText: PropTypes.string,
//   secondaryButtonText: PropTypes.string,
//   heroImage: PropTypes.string.isRequired,
//   primaryButtonLink: PropTypes.string,
//   secondaryButtonLink: PropTypes.string,
// };

export default HeroSection;
