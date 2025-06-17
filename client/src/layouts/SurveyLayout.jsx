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
      <section className="bg-[#f9f9fb]">
        <SurveyHeader />
        <SidebarProvider>
          <SurveySidebar />
          <main className="w-full">
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </section>
    </>
  );
};

export default SurveyLayout;
