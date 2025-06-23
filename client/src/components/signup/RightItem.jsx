import React, { useState } from "react";
import * as Icons from "@/assets/icons/Icons";
import * as Images from "@/assets/images/Images";
import { Button } from "@/components";
//
import { useDispatch, useSelector } from "react-redux";
import { register as registerr } from "@/redux/userslice/apiCalls";
import { useForm } from "react-hook-form";
import LazyLoadingBtn from "@/features/loading/LazyLoadingBtn";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const RightItem = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user ?? {});
  const handleSubmitMethod = async (data) => {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    const res = await registerr(dispatch, newData);
    if (res.payload) {
      toast.success("Signed up successfully! ");
      navigate("/signin");
    }
  };
  return (
    <>
      <div className=" h-full md:w-[70%] w-full p-3 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-primary font-medium">Create Account</h2>
        <div className="flex justify-between gap-6 items-center py-7">
          <button>
            <img src={Images.google} className="w-12" />
          </button>
          <button>
            <img src={Images.github} className="w-12" />
          </button>
        </div>
        <span className="text-sm text-gray-500">Or register using your email address</span>
        <form
          onSubmit={handleSubmit(handleSubmitMethod)}
          className="flex flex-col gap-4 mt-5 w-[350px]"
        >
          <div className="formcontrol relative">
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Name cannot exceed 10 characters",
                },
              })}
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500  placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.FaPen />
            </span>
          </div>
          {errors.name && typeof errors.name.message === "string" && (
            <p className="text-red-500">{errors.name.message}</p>
          )}

          <div className="formcontrol relative">
            <input
              type="text"
              placeholder="E-mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="text-gray-500 text-sm pl-7 w-full placeholder:text-gray-500  placeholder:text-xs bg-[#EFF0F3] border-0 outline-0 rounded-md p-2"
            />
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.MdEmail />
            </span>
          </div>
          {errors.email && typeof errors.email.message === "string" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/*  */}
          <div className="formcontrol relative">
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.RiLockPasswordLine />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot exceed 20 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                  message: "Password must contain at least one letter and one number",
                },
              })}
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
          {errors.password && typeof errors.password.message === "string" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div className="formcontrol relative">
            <span className="absolute text-xs left-2  top-3 text-gray-400">
              <Icons.RiLockPasswordLine />
            </span>
            <input
              type={showConPassword ? "text" : "password"}
              placeholder="Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
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
          {errors.confirmPassword && typeof errors.confirmPassword.message === "string" && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <div className="formcontrol flex items-center gap-2">
            <input
              type="checkbox"
              {...register("agree", {
                required: "Policy is required",
              })}
            />
            <label className="text-xs text-gray-500 ml-2">
              Agree with <span className="text-primary">Terms &Condition</span>
            </label>
          </div>
          {errors.agree && typeof errors.agree.message === "string" && (
            <p className="text-red-500">{errors.agree.message}</p>
          )}

          {error?.msg && <p className="text-red-500">{error.msg}</p>}

          <div className="m-auto mt-5">
            <Button
              disabled={isFetching}
              className="bg-primary rounded-full text-xs px-13 w-fit text-white "
            >
              {isFetching ? <LazyLoadingBtn /> : "SIGN UP"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightItem;
