import React, { useState } from "react";
import * as Icons from "@/assets/icons/Icons";
import * as Images from "@/assets/images/Images";
import { Button } from "@/components";

const RightItem = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <>
      <div className=" h-full md:w-[70%] w-full p-3 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-primary font-medium">Create Account</h2>
        <div className="flex justify-between gap-6 items-center py-7">
          <img src={Images.google} className="w-12" />
          <img src={Images.github} className="w-12" />
        </div>
        <span className="text-sm text-gray-500">Or register using your email address</span>
        <form className="flex flex-col gap-4 mt-5 w-[350px]">
          <div className="formcontrol relative">
            <input
              type="text"
              placeholder="Name"
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500  placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.FaPen />
            </span>
          </div>
          <div className="formcontrol relative">
            <input
              type="text"
              placeholder="E-mail"
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500  placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.MdEmail />
            </span>
          </div>


          {/*  */}
          <div className="formcontrol relative">
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.RiLockPasswordLine />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500   placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <div className="absolute text-xs right-2 top-3   text-gray-400">
              {showPassword ? (
                <span
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  className=""
                >
                  <Icons.FaEyeSlash />
                </span>
              ) : (
                <span
                  onClick={() => {
                    setShowPassword(true);
                  }}
                >
                  <Icons.FaEye />
                </span>
              )}
            </div>
          </div>
          <div className="formcontrol relative">
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.RiLockPasswordLine />
            </span>
            <input
              type={showConPassword ? "text" : "password"}
              placeholder="Password"
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500   placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <div className="absolute text-xs right-2 top-4   text-gray-400">
              {showConPassword ? (
                <span
                  onClick={() => {
                    setShowConPassword(false);
                  }}
                  className=""
                >
                  <Icons.FaEyeSlash />
                </span>
              ) : (
                <span
                  onClick={() => {
                    setShowConPassword(true);
                  }}
                >
                  <Icons.FaEye />
                </span>
              )}
            </div>
          </div>
          <div className="formcontrol flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-xs text-gray-500 ml-2">
              Agree with <span className="text-primary">Terms &Condition</span>
            </label>
          </div>
          <div className="m-auto mt-5">
            <Button className="bg-primary rounded-full text-xs px-13 w-fit text-white ">
              SIGN UP
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightItem;
