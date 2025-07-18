import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/lotti/notfoundpage.json";

const Error = () => {
  const error = useRouteError();
  let errorStatus;
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
  } else {
    errorStatus = 404;
    errorMessage = "Page Not Found";
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full grid place-items-center bg-white">
      <div className="w-96 h-96">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-center">
        <h1 className="text-[128px] font-bold">{errorStatus}</h1>
        <div className="text-blue-400 font-medium">{errorMessage}</div>
        <Link
          to="/"
          replace={true}
          className="text-blue-600 font-medium text-2xl hover:text-blue-800 transition-colors">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
