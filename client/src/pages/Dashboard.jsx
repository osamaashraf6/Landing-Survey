import CreateSurvey from "@/components/Dashboard/CreateSurvey/CreateSurvey";
import EmptyDash from "@/components/Dashboard/EmptyDash/emptyDash";
import React from "react";

const Dashboard = () => {
  return <>
    <section className=" min-h-screen flex flex-col items-center justify-center">
      <div className="container">
        <EmptyDash/>
      </div>
    </section>
  </>;
};

export default Dashboard;
