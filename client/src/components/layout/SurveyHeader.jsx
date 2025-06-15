import React from "react";

const SurveyHeader = () => {
  return (
    <>
      <div className="w-full shadow bg-white flex justify-end items-center p-4">
        <div>
          <button className="bg-orange-500 text-white rounded p-2">View Plans</button>{" "}
          <button className="bg-blue-500 text-white rounded p-2">Create Survey</button>
        </div>
      </div>
    </>
  );
};

export default SurveyHeader;
