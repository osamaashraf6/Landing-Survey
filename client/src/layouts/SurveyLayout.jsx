import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SurveyHeader from "@/components/layout/SurveyHeader";
import SurveySidebar from "@/components/layout/SurveySidebar";

const SurveyLayout = () => {
  return (
    <div className="bg-[#f9f9fb]">
      <Navbar />
      <SurveyHeader />
      <section className="">
        <div className="asides  flex ">
          <div className="asideleft border w-[365px]">
            <SurveySidebar />
          </div>
          <div className="asideright border w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurveyLayout;
