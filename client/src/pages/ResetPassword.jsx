import ForgetHeader from "@/components/forgetpassword/ForgetHeader";
import React, { useState } from "react";
import * as Icons from "@/assets/icons/Icons";
import { Button } from "@/components";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <>
      <ForgetHeader />
      <section className="h-[80vh] grid place-items-center p-6">
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-3xl md:text-5xl font-semibold pb-5">Create New Password</h1>
          <div className="text-lg text-gray-500  text-center w-full md:w-[70%]">
            Please enter your new password below. Make sure it’s strong and secure
          </div>
          <form className="w-[320px]  md:w-[350px]   mt-5">
            <div className="formcontrol relative mb-4">
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
            <div className="formcontrol relative mb-2">
              <span className="absolute text-xs left-2  top-3 text-gray-400">
                <Icons.RiLockPasswordLine />
              </span>
              <input
                type={showConPassword ? "text" : "password"}
                placeholder="Confirm Password"
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
            <div className="  text-gray-500 pb-6 text-xs font-semibold">
              Password must be at least 8 characters, include an uppercase letter and a number
            </div>
            <Button className="w-full text-sm">Reset Password</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
