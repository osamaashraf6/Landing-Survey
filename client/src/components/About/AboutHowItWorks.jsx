import React from "react";

const steps = [
  {
    title: "Create Your Survey",
    description:
      "Choose a template or start from scratch using our easy-to-use builder",
  },
  {
    title: "Share With Your Audience",
    description:
      "Send your survey via email, social media, or embed it in your website",
  },
  {
    title: "Analyze Responses",
    description:
      "Get instant insights with clean charts and downloadable reports",
  },
];

const AboutHowItWorks = () => {
  return (
    <section className=" py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-3xl font-bold mb-2 text-black">
          How It <span className="text-primryBtn">Works</span>
        </h2>
        <p className="text-gray-400 text-md md:text-lg ">
          Get started in just 3 simple steps
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch mt-10 ">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex-1 px-6 py-8 flex flex-col items-center justify-center min-h-[220px]">
              <h3 className="text-xl md:text-xl font-bold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-400 text-base md:text-md font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHowItWorks;
