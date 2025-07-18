

import { Button } from "@/components";
import HeaderSurv from "../common-Dash/headerSurv";
import * as Icon from '@/assets/icons/Icons.js'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,

    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import useSurvey from "@/hooks/useSurvey.jsx";
import useHndleNav from "@/hooks/useHndleNav";
import usePreview from "@/hooks/previewHook";
import { toast } from "sonner";

// import * as Icon from '@/assets/icons/Icons.js'

export default function SurveyView({ surveys }) {
    const { theme } = useContext(ThemeContext);
    const { deleteSurv } = useSurvey();
    const { handleUpdateNav, handlePreviewNav, handleAddQuesNav } = useHndleNav();
    const {  createPublishLinkMutation } = usePreview();

    const handlePublishLink = (surveyId) => {
      createPublishLinkMutation.mutate(surveyId, {
        onSuccess: (res) => {
          toast.success("Publish link created successfully!");
          navigator.clipboard.writeText(`http://localhost:5173/fillingform?link=${res.link}`);
        },
        onError: () => {},
      });
    };
    return (
      <>
        <HeaderSurv />
        {surveys?.map((sur) => (
          <Card
            key={sur.id}
            className={`${
              theme === "dark"
                ? "[box-shadow:0_4px_16px_rgba(255,255,255,0.2)]"
                : "[box-shadow:0_4px_16px_#00000814]"
            } flex flex-row  justify-between  p-8  mb-7   border-none  transition-all hover:-translate-y-2`}
          >
            <div className="flex  md:flex">
              <div className="flex items-center gap-4  ">
                <Checkbox className="p-2 flex items-center justify-center text-white border-2 border-gray-200 " />
                <Button
                  className={`${
                    sur.status === "draft" ? "bg-gray-400" : "bg-primary"
                  } text-xs md:text-sm w-20 capitalize`}
                >
                  {sur.status}
                </Button>
              </div>
              <CardContent className=" flex flex-col items-center ">
                <CardTitle className="mb-1  font-medium  text-sm md:text-base capitalize">
                  {sur.title}
                </CardTitle>
                <CardDescription className=" text-xs flex items-center justify-center gap-1">
                  <Icon.MdOutlineDateRange />
                  Updated: {new Date(sur.deadline).toLocaleDateString("en-GB")}
                </CardDescription>
              </CardContent>
            </div>
            <div className="md:flex md:gap-8 md:items-center md:justify-center ">
              <CardAction>
                <Button
                  onClick={() => handlePublishLink(sur?.id)}
                  className={`hidden md:block w-50 md:w-[150px] ${
                    theme === "dark" ? "" : "text-gray-700"
                  }  hover:text-white bg-transparent border-2 border-primary cursor-pointer text-sm`}
                >
                  Send Survey
                </Button>

                <Icon.FaLink className="md:hidden text-xl text-gray-600" />
              </CardAction>
              <CardAction>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Icon.PiDotsThreeOutlineFill className="text-xl text-gray-600 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className={`${
                      theme === "dark" ? "bg-[#060e1f]" : " bg-white"
                    } px-1 py-3 border-none`}
                  >
                    <DropdownMenuCheckboxItem
                      className=" flex  items-center  gap-2 capitalize transition-all hover:bg-gray-100 focus:bg-gray-200 focus:outline-none p-1 cursor-pointer"
                      onClick={() => {
                        handleAddQuesNav(sur.id);
                      }}
                    >
                      <Icon.FaCirclePlus />
                      add question
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="flex  items-center  gap-2 capitalize transition-all hover:bg-gray-100 focus:bg-gray-200 focus:outline-none p-1 cursor-pointer"
                      onClick={() => {
                        handlePreviewNav(sur.id);
                      }}
                    >
                      <Icon.FaEye />
                      preview
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      className="flex  items-center  gap-2 capitalize transition-all hover:bg-gray-100 focus:bg-gray-200 focus:outline-none p-1 cursor-pointer"
                      onClick={() => {
                        handleUpdateNav(sur);
                      }}
                    >
                      <Icon.MdEditSquare />
                      edit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onClick={() => {
                        deleteSurv(sur.id);
                      }}
                      className="flex  items-center  gap-2 capitalize transition-all hover:bg-gray-100 focus:bg-gray-200 focus:outline-none p-1 cursor-pointer"
                    >
                      <Icon.HiTrash />
                      delete
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardAction>
            </div>
          </Card>
        ))}
      </>
    );
}
