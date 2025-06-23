import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "@/assets/icons/Icons";
import { Button } from "@/components";
const ForgetContent = () => {
  return (
    <>
      <section className="h-[80vh] flex justify-center items-center text-center ">
        <div className="">
          <h1 className="text-3xl font-semibold pb-5">Forgot Password?</h1>
          <span className="text-xs text-gray-500 font-semibold">
            Don't worry, we'll help you reset it.
          </span>
          <form className="  md:w-[400px] flex flex-col gap-4 mt-5">
            <div className="formcontrol relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-gray-500 text-sm pl-8 w-full placeholder:text-gray-500  placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
              />
              <span className="absolute  left-2  top-2.5 text-gray-400">
                <Icons.MdEmail />
              </span>
            </div>
            <Button>Reset Password</Button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
            <span>
              <Icons.FaArrowLeftLong />
            </span>
            <Link to="/signin">Back to sign in</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetContent;
