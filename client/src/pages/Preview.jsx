import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import logoPrev from "../assets/images/logo-prev.png";
import usePreview from "@/hooks/previewHook";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { ThemeContext } from "@/context/ThemeContext";

const Preview = () => {
  const [searchParams] = useSearchParams();

  const surveyId = searchParams.get("surveyId");
  const { data: previewData, isPending } = useGetAllPreviewQuery(surveyId);
  const { useGetAllPreviewQuery, createPublishLinkMutation } = usePreview();

  const handlePublishLink = (surveyId) => {
    createPublishLinkMutation.mutate(surveyId, {
      onSuccess: (res) => {
        toast.success("Publish link created successfully!");
        navigator.clipboard.writeText(`http://localhost:5173/fillingform?link=${res.link}`);
      },
      onError: () => {},
    });
  };
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className="px-10 py-14 flex flex-col gap-5 w-full md:w-[70%]">
        <h2 className="text-xl">Add question type Text Area (Comment Box)</h2>
        <Button className="bg-white border text-[#00B7C1] hover:bg-[#00B7C1] w-fit border-[#00B7C1] hover:text-white cursor-pointer">
          <img src={logoPrev} className="w-8" /> Add Logo
        </Button>
        <div className="rounded-md py-2 px-5 bg-white text-[#00B7C1] font-semibold text-lg">
          Explaining Physics Concepts
        </div>
        <div className="items py-4 flex flex-col gap-4">
          {/*  */}

          {isPending ? (
            <p>Loading...</p>
          ) : previewData?.data?.length > 0 ? (
            previewData?.data?.map((item, index) => (
              <div key={item?.qid} className="item">
                <h3 className="text-sm text-gray-500 pb-3">
                  {index + 1}. {item?.questionText}
                </h3>
                {item?.type === "textarea" ? (
                  <textarea
                    className={`outline-0 p-2 text-sm  ${
                      theme === "dark" ? "" : "bg-white"
                    } w-full border border-gray-300 h-[106px]`}
                  ></textarea>
                ) : item?.type === "mcq" ? (
                  item?.choices.map((option, index) => (
                    <div
                      key={index}
                      className="formcontrol pb-3 flex items-center gap-2 text-xs text-gray-500"
                    >
                      <input id={`ans-${item?.id}-${index}`} name="mcq" type="radio" />
                      <label htmlFor={`ans-${item?.id}-${index}`}>{option}</label>
                    </div>
                  ))
                ) : null}
              </div>
            ))
          ) : (
            <p>No Questions To Preview</p>
          )}
        </div>
        <div className="flex gap-3 items-center">
          <Link
            to="/dashboard"
            className=" bg-primary text-center py-1.5 rounded-md w-[150px] text-white   cursor-pointer"
          >
            Done
          </Link>
          <Button
            onClick={() => handlePublishLink(surveyId)}
            className=" w-[150px] text-white bg-[#FFA630] hover:bg-[#ffa530dd]  cursor-pointer"
          >
            Send Survey
          </Button>
        </div>
      </section>
    </>
  );
};

export default Preview;
