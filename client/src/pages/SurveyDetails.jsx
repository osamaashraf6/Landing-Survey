import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import logoSurveyDetails from "../assets/images/logo-survey-details.png";
import * as Icons from "@/assets/icons/Icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SurveyDetails = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("comment");

  const [answers, setAnswers] = useState(["", "", ""]);
  const addAnswerAfter = (index) => {
    const newAnswers = [...answers];
    newAnswers.splice(index + 1, 0, "");
    setAnswers(newAnswers);
  };

  const removeAnswer = (index) => {
    if (answers.length > 1) {
      const newAnswers = [...answers];
      newAnswers.splice(index, 1);
      setAnswers(newAnswers);
    }
  };
  //
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
      <section className="px-4 md:px-10 pt-3 pb-16 flex flex-col gap-5 w-full md:w-[70%]">
        {/*  */}
        <h2 className="text-xl">Add question type Text Area (Comment Box)</h2>
        <Button className="bg-white border py-5 w-[170px] flex justify-start border-[#00B7C1] hover:text-white cursor-pointer">
          <img src={logoSurveyDetails} className="w-8" /> Add Logo
        </Button>
        {/*  */}
        <div className="rounded-md py-2 px-5 bg-white flex items-center justify-between ">
          <p className="text-[#00B7C1] font-semibold text-lg">
            Explaining Physics Concepts
          </p>
          <Button className="  text-white   cursor-pointer">Edit</Button>
        </div>
        {/*  */}
        <div className="bg-white rounded-md">
          <div className="items px-4 md:px-16  py-4 flex flex-col gap-4">
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
                      <label htmlFor={`ans-${item.id}-${index}`}>
                        {option}
                      </label>
                    </div>
                  ))
                ) : null}
              </div>
            ))}
          </div>
          {/*  */}
          {open && (
            <>
              <div className="py-10 px-3 border-y border-gray-300 flex items-center gap-6">
                <span className="text-sm text-gray-500">Q3:</span>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between w-full">
                  <input
                    type="text"
                    className="border p-1.5 pl-3 border-gray-300 bg-[#eff0f3] outline-0 md:w-full placeholder:text-sm rounded-tl-md rounded-bl-md"
                    placeholder="Enter Your Question"
                  />
                  <Select
                    onValueChange={(value) => {
                      setType(value);
                    }}
                  >
                    <SelectTrigger className="w-[240px] md:w-[360px] p-4.5 rounded-none text-gray-500 bg-[#eff0f3] border border-gray-300 rounded-tr-md rounded-br-md">
                      <SelectValue placeholder="Comment Box" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-[#eff0f3]">
                        <SelectLabel>Choose Type</SelectLabel>
                        <SelectItem value="comment">Comment Box</SelectItem>
                        <SelectItem value="mcq">MCQ</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {type === "mcq" && (
                <div className="px-3 py-4 flex flex-col gap-4">
                  {answers.map((_, index) => (
                    <div key={index} className="flex items-center gap-4 mb-2">
                      <span className="flex bg-[#eff0f3] h-[30px] w-[35px] rounded-full"></span>
                      <input
                        type="text"
                        value={answers[index]}
                        onChange={(e) => {
                          const newAnswers = [...answers];
                          newAnswers[index] = e.target.value;
                          setAnswers(newAnswers);
                        }}
                        className="bg-[#eff0f3] pl-3 p-1.5 rounded border border-gray-300 text-sm w-full outline-0"
                        placeholder="Enter an answer choice"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => addAnswerAfter(index)}
                          className="rounded-full border border-[#eff0f3] h-[30px] w-[30px] flex items-center justify-center text-[#00B7C1] hover:bg-[#00B7C1] hover:text-white"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeAnswer(index)}
                          className="rounded-full border border-[#eff0f3] h-[30px] w-[30px] flex items-center justify-center text-[#00B7C1] hover:bg-[#00B7C1] hover:text-white"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2 items-center justify-end p-4">
                <Button
                  onClick={() => setOpen(false)}
                  className=" w-[85px] bg-white border text-[#00B7C1] border-[#00B7C1] hover:text-white  cursor-pointer"
                >
                  CANCEL
                </Button>
                <Button className=" w-[85px] text-white   cursor-pointer">
                  SAVE
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-md">
          {!open && (
            <Button
              onClick={() => setOpen(true)}
              className=" w-[150px] text-white bg-[#FFA630] hover:bg-[#ffa530dd]  cursor-pointer"
            >
              <Icons.CiCirclePlus /> Add Question
            </Button>
          )}
          <Button className=" w-[150px] text-white   cursor-pointer">
            Preview Survey
          </Button>
        </div>
      </section>
    </>
  );
};

export default SurveyDetails;
