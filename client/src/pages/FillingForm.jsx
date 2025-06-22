import React from "react";
import { Button } from "@/components/ui/button";
import usePublishLink from "@/hooks/publishLinkHook";
import { Navbar } from "@/components";
import { useSearchParams } from "react-router-dom";

const FillingForm = () => {
  const { useGetAllQuestionsFromPublishLinkQuery } = usePublishLink();
  const [searchParams] = useSearchParams();
  const link = searchParams.get("link");
  const { data: qlinks, isPending } = useGetAllQuestionsFromPublishLinkQuery(link);

  return (
    <>
      <Navbar />
      <section className=" py-14  flex-col gap-5   flex items-center ">
        <div className="md:w-[700px]">
          <h2 className="text-xl pb-4">Express Your OPinion Below.</h2>
          {/*  */}
          <div className="rounded-md py-2 px-5  border border-gray-500  font-semibold ">
            <h2 className="pb-2 text-gray-700">Title:</h2>
            <p className="text-[#00B7C1] text-lg">{qlinks?.title}</p>
            <h2 className="py-2 text-gray-700">Description:</h2>
            <p className="text-gray-500">{qlinks?.description}</p>
          </div>
          {/*  */}
          <div className="my-4">
            <h3 className="text-sm text-gray-500 pb-2">Name</h3>
            <input
              type="text"
              className="outline-0 rounded-md p-2 text-sm  w-full border border-gray-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-2">
            <h3 className="text-sm text-gray-500 pb-2">Email</h3>
            <input
              type="text"
              className="outline-0 rounded-md p-2 text-sm  w-full border border-gray-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="items py-4 flex flex-col gap-4">
            {/*  */}

            {isPending ? (
              <p>Loading...</p>
            ) : qlinks?.questions?.length > 0 ? (
              qlinks.questions.map((item, index) => (
                <div key={item?.qid} className="item">
                  <h3 className="text-sm text-gray-500 pb-3">
                    {index + 1}. {item?.questionText}
                  </h3>
                  {item?.type === "textarea" ? (
                    <textarea className="outline-0 p-2 text-sm  w-full border border-gray-300 h-[106px]"></textarea>
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
            <Button className=" w-[150px] text-white bg-[#FFA630] hover:bg-[#ffa530dd]  cursor-pointer">
              Submit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FillingForm;
