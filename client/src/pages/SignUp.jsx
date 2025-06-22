import React from "react";
import Header from "@/components/signup/Header";
import LeftItem from "@/components/signup/LeftItem";
import RightItem from "@/components/signup/RightItem";
const SignUp = () => {
  return (
    <>
      <Header />
      <section className="h-[100vh]">
        <div className=" h-full ">
          <div className="items flex h-full ">
            <LeftItem />
            <RightItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
