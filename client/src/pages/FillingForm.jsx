import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import usePublishLink from "@/hooks/publishLinkHook";
import { Navbar } from "@/components";
import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "@/context/ThemeContext";

const FillingForm = () => {
  const { useGetAllQuestionsFromPublishLinkQuery } = usePublishLink();
  const [searchParams] = useSearchParams();
  const link = searchParams.get("link");
  const { data: qlinks, isPending } = useGetAllQuestionsFromPublishLinkQuery(link);
  const { theme } = useContext(ThemeContext);
const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const answers = formData.questions || {};

    const payload = {
      surveyId: qlinks._id,
      respondentName: formData.name,
      respondentEmail: formData.email,
      answers: answers,
    };

    try {
      const response = await fetch(`${BASE_URL}/response`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert("Submitted successfully");
      reset();
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-14 flex-col gap-5 flex items-center">
        <div className="md:w-[700px]">
          <h2 className="text-xl pb-4">Express Your Opinion Below.</h2>

          <div
            className={`rounded-md py-5 px-5 ${
              theme === "dark"
                ? "shadow-[0_-1px_10px_rgba(255,255,255,0.2)]"
                : "bg-white border border-gray-300"
            } font-semibold`}
          >
            <h2 className="pb-2 text-gray-700">Title:</h2>
            <p className="text-[#00B7C1] text-lg">{qlinks?.title}</p>
            <h2 className="py-2 text-gray-700">Description:</h2>
            <p className="text-gray-500">{qlinks?.description}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <h3 className="text-sm text-gray-500 pb-2">Name</h3>
              <input
                {...register("name", { required: true })}
                type="text"
                className="outline-0 rounded-md p-2 text-sm w-full border border-gray-300"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs">Name is required</p>}
            </div>

            <div className="mb-4">
              <h3 className="text-sm text-gray-500 pb-2">Email</h3>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                className="outline-0 rounded-md p-2 text-sm w-full border border-gray-300"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs">Valid email is required</p>}
            </div>

            <div className="py-4 flex flex-col gap-4">
              {isPending ? (
                <p>Loading...</p>
              ) : qlinks?.questions?.length > 0 ? (
                qlinks.questions.map((item, index) => (
                  <div key={item?.qid} className="item">
                    <h3 className="text-sm text-gray-500 pb-3">
                      {index + 1}. {item?.questionText}
                    </h3>

                    {item?.type === "textarea" ? (
                      <textarea
                        {...register(`questions.${item.qid}`, { required: true })}
                        className="outline-0 p-2 text-sm w-full border border-gray-300 h-[106px]"
                      ></textarea>
                    ) : item?.type === "mcq" ? (
                      item?.choices.map((option, optIndex) => (
                        <div key={optIndex} className="formcontrol pb-3 flex items-center gap-2 text-xs text-gray-500">
                          <input
                            type="radio"
                            id={`q-${item.qid}-${optIndex}`}
                            value={option}
                            {...register(`questions.${item.qid}`, { required: true })}
                          />
                          <label htmlFor={`q-${item.qid}-${optIndex}`}>{option}</label>
                        </div>
                      ))
                    ) : null}

                    {errors.questions?.[item.qid] && (
                      <p className="text-red-500 text-xs">This question is required</p>
                    )}
                  </div>
                ))
              ) : (
                <p>No Questions To Preview</p>
              )}
            </div>

            <div className="flex gap-3 items-center">
              <Button type="submit" className="w-[150px] text-white bg-[#FFA630] hover:bg-[#ffa530dd] cursor-pointer">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FillingForm;
