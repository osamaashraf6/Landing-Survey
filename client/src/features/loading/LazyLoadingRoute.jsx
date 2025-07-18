import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/lotti/Animation - 1740129437005.json";

const LazyLoadingRoute = () => {
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
    </div>
  );
};

export default LazyLoadingRoute;
