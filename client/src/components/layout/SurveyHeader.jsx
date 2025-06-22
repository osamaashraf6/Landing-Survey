import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../UI/button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const SurveyHeader = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleCreateSurvNav = () => {
    navigate('/dashboard/surveyupsert');
  };

  return (
    <>
      <SidebarContent
        className={`w-full [box-shadow:0_4px_10px_#00000812] ${
          theme === "dark" ? "" : "bg-white"
        } flex justify-end items-end p-4`}
      >
        <div className="me-9 md:me-20 flex gap-4">
          <Button className="bg-[#FFA630] text-white rounded-lg w-32 font-medium text-base leading-normal px-18 transition-all hover:bg-orange-400 hover:font-bold cursor-pointer">
            View Plans
          </Button>
          <Button
            className="bg-primary text-white rounded-lg w-32 font-medium text-base leading-normal px-18 transition-all hover:bg-[#b9feffe8] hover:text-primary hover:font-bold cursor-pointer"
            onClick={handleCreateSurvNav}
          >
            Create Survey
          </Button>
        </div>
      </SidebarContent>
    </>
  );
};

export default SurveyHeader;
