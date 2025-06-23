import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import SurveyHeader from "@/components/layout/SurveyHeader";
import SurveySidebar from "@/components/layout/SurveySidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
const SurveyLayout = () => {
  return (
    <>
      <Navbar />
      <section className="  min-h-screen ">
        <SurveyHeader />
        <SidebarProvider>
          <div className="relative">
            <SurveySidebar />
          </div>
          <main className="w-full">
            <div className=" absolute top-21 right-2 lg:top-22 md:right-auto z-20 ">
              <SidebarTrigger className="fixed" />
            </div>

            <Outlet />
          </main>
        </SidebarProvider>
      </section>
    </>
  );
};

export default SurveyLayout;
