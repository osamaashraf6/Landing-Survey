import React from "react";
import teamLeaderImage from "@/assets/images/about/TeamLeader.svg";
const AboutTeamLeader = () => {
  return (
    <div className=" min-h-[60vh] flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-3xl font-bold mb-16 text-black">
        Team <span className="text-primryBtn">Leader</span>
      </h2>
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-between my-10 gap-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center  text-center lg:text-left">
          <h3 className="text-2xl text-center  font-semibold text-primryBtn mb-4 mt-6">
            Join the team
          </h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Founded in 2012, Typeform is now a remote-first company with an
            international team of over 250 employees. We offer competitive
            compensation, benefits, and career opportunities to support your
            professional growth.
          </p>
          <button className="bg-primryBtn hover:bg-primryBtn/80 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200">
            Browse Open Roles
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={teamLeaderImage}
            alt="Team high five"
            className="rounded-lg shadow-lg object-cover w-[320px] h-[240px] sm:w-[380px] sm:h-[260px] lg:w-[340px] lg:h-[260px] xl:w-[380px] xl:h-[280px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeamLeader;
