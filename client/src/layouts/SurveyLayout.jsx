import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SurveyHeader from "@/components/layout/SurveyHeader";
import SurveySidebar from "@/components/layout/SurveySidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
const SurveyLayout = ({children}) => {
  return (
    <div className="bg-[#f9f9fb]">
      <Navbar />
      {/* <SurveyHeader /> */}
      <section className="">

        <SidebarProvider>
        <SurveySidebar />
          <main>
            <SidebarTrigger />
            {children}
            <Outlet />
          </main>
        </SidebarProvider>
        {/* <div className="asides  flex ">
          <div className="asideleft border w-[365px]">
          </div>
          <div className="asideright border w-full">
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default SurveyLayout;
