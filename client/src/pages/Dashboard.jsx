import CreateSurvey from "@/components/Dashboard/SurveyView/SurveyView";
import EmptyDash from "@/components/Dashboard/EmptyDash/emptyDash";
import SurveyContextProvider from "@/context/SurveyContext";

const Dashboard = () => {
  return <>
    <section className=" min-h-screen flex flex-col items-center  ">
      <div className="container">

        <SurveyContextProvider>

        <EmptyDash />
        </SurveyContextProvider>

      </div>
    </section>
  </>;
};

export default Dashboard;
