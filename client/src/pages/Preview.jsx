import React from "react";
import { Button } from "@/components/ui/button";
import logoPrev from "../assets/images/logo-prev.png";

const Preview = () => {
  const questions = [
    {
      id: 1,
      question:
        "What did you like most about the physics course or the instructor?",
      type: "text",
    },
    {
      id: 2,
      question:
        "What did you like most about the physics course or the instructor?",
      type: "text",
    },
    {
      id: 3,
      question:
        "How would you rate the instructor's ability to explain complex physics concepts clearly?",
      type: "radio",
      options: [
        "Excellent – very clear and easy to understand",
        "Good – mostly clear but could improve",
        "Fair – some concepts were difficult to grasp",
        "Poor – struggled to explain concepts clearly",
      ],
    },
  ];
  return (
    <>
      <section className="px-10 py-14 flex flex-col gap-5 w-full md:w-[70%]">
        <h2 className="text-xl">Add question type Text Area (Comment Box)</h2>
        <Button className="bg-white border w-fit border-[#00B7C1] hover:text-white cursor-pointer">
          <img src={logoPrev} className="w-8" /> Add Logo
        </Button>
        <div className="rounded-md py-2 px-5 bg-white text-[#00B7C1] font-semibold text-lg">
          Explaining Physics Concepts
        </div>
        <div className="items py-4 flex flex-col gap-4">
          {/*  */}
          {questions.map((item) => (
            <div className="item">
              <h3 className="text-sm text-gray-500 pb-3">
                {item.id}. {item.question}
              </h3>
              {item.type === "text" ? (
                <textarea className="outline-0 p-2 text-sm bg-white w-full border border-gray-300 h-[106px]"></textarea>
              ) : item.type === "radio" ? (
                item.options.map((option, index) => (
                  <div
                    key={index}
                    className="formcontrol pb-3 flex items-center gap-2 text-xs text-gray-500"
                  >
                    <input id={`ans-${item.id}-${index}`} type="radio" />
                    <label htmlFor={`ans-${item.id}-${index}`}>{option}</label>
                  </div>
                ))
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <Button className=" w-[150px] text-white   cursor-pointer">
            Done
          </Button>
          <Button className=" w-[150px] text-white bg-[#FFA630] hover:bg-[#ffa530dd]  cursor-pointer">
            Send Survey
          </Button>
        </div>
      </section>
    </>
  );
};

export default Preview;
