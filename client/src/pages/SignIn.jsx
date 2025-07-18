import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, RiLockPasswordLine, MdEmail } from "../assets/icons/Icons";
import {
  AuthDontHaveAccount,
  AuthSocialButtons,
  AuthHeader,
  TextField,
  Button,
} from "@/components/";
import { toast } from "sonner";
import { login } from "@/redux/userslice/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import LazyLoadingBtn from "@/features/loading/LazyLoadingBtn";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user||{});

  console.log(error);
  const handleSubmitMethod = async (data) => {
    const res = await login(dispatch, data);
    if (res.payload) {
      toast.success("Signed in successfully! ");
      navigate("/");
    } else {
      toast.error(error || "Login failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />
      <main className="flex-grow flex  ">
        <div className="w-full md:w-4/5 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-5xl font-bold text-center text-primary mb-15">SIGN IN</h1>
            <AuthSocialButtons />
            <div className="text-center text-sm text-gray-600 mb-6">
              Or register using your email address
            </div>
            <div className="text-center mb-6 block sm:hidden">
              <AuthDontHaveAccount />
            </div>
            <form className="text-center" onSubmit={handleSubmit(handleSubmitMethod)}>
              {/* Email input */}
              <TextField
                id="email"
                type="email"
                placeholder="E-mail"
                icon={<MdEmail size={20} />}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && typeof errors.email.message === "string" && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              {/* Password input */}
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                icon={<RiLockPasswordLine size={20} />}
                rightIcon={
                  showPassword ? (
                    <FaEyeSlash size={20} onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye size={20} onClick={togglePasswordVisibility} />
                  )
                }
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
              />
              {errors.password && typeof errors.password.message === "string" && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              {/* Remember me and forgot password */}
              <div className="flex justify-between items-center mb-6 ml-1.5 mr-1.5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 h-4 w-4 text-primary focus:ring-teal-400 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me?
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary">
                  Forgot password?
                </Link>
              </div>

              <Button size={"lg"} disabled={isFetching} className={"mt-2"} width={"1/2"}>
                {isFetching ? <LazyLoadingBtn /> : "SIGN IN"}
              </Button>
            </form>
          </div>
        </div>
        <div className="hidden md:flex md:w-2/5 bg-primary text-white p-12 justify-center items-center">
          <div className="text-center p-1">
            <h2 className="text-5xl font-semibold mb-3">New to</h2>
            <h2 className="text-5xl font-semibold mb-3">SurveyLand?</h2>
            <h3 className="text-5xl font-semibold mb-9">Sign up here!</h3>
            <p className="mb-8 text-[1.20rem]">Become part of our community</p>
            <Button variant={"secondary"} size={"md"} className={"mt-5"} width={"2/3"}>
              Sign Up
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
