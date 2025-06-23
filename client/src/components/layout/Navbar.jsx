import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as Icons from "../../assets/icons/Icons";
import * as Images from "../../assets/images/Images";
import DarkModeToggle from "../../features/DarkMode/DarkMode";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeContext } from "@/context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { logout } from "@/redux/userslice/apiCalls";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdwon, setOpenDropdwon] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { currentUser } = useSelector((state) => state.user|| {});
  const dispatch = useDispatch();
  const handleLogOut = () => {
    logout(dispatch);
  };

  return (
    <>
      <header
        className={`${
          theme === "dark" ? "bg-[#111826]" : "bg-[#fafafa]"
        } sticky top-0 z-50  border-b border-gray-200   py-1.5 w-full`}
      >
        <div className="container">
          <div className="parnav flex justify-between items-center py-2">
            <div className="brand xl:w-[35%] w-full flex items-center justify-between">
              <Link to="/" className="text-xl font-bold flex items-center gap-2">
                <span className="text-primary">Survey</span>Land
              </Link>
              <div className="hamburger-control  ">
                <button
                  className="text-xl cursor-pointer flex xl:hidden hover:bg-[#e9e9e7] p-2 rounded-full transition-all duration-500 ease-in-out"
                  onClick={() => setOpen(true)}
                >
                  <Icons.HiBars3BottomRight />
                </button>
              </div>
            </div>
            {/* Desktop menu */}
            <nav className="xl:flex hidden navigation w-[65%] items-center justify-between">
              <ul className="flex items-center gap-10">
                <li>
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/faqs"
                  >
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/pricing"
                  >
                    Pricing
                  </NavLink>
                </li>
              </ul>
              <DarkModeToggle />
            </nav>
            <ul className="xl:flex hidden items-center gap-4">
              <li>
                <Select>
                  <SelectTrigger className="w-[70px] text-[#FFA630] bg-white border border-[#FFA630] rounded-md">
                    <SelectValue placeholder="EN" />
                  </SelectTrigger>

                  <SelectContent className="w-[56px] border border-[#FFA630] shadow-md bg-white">
                    <SelectGroup>
                      <SelectItem
                        value="ar"
                        className="  hover:bg-[#eeeeee] focus:bg-[#eeeeee] text-[#FFA630] px-2 py-1"
                      >
                        AR
                      </SelectItem>
                      <SelectItem
                        value="en"
                        className="  hover:bg-[#eeeeee] focus:bg-[#eeeeee] text-[#FFA630] px-2 py-1"
                      >
                        EN
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              {currentUser?.user?.name ? (
                <>
                  <li>
                    <Icons.IoNotificationsOutline />
                  </li>
                  <li>
                    <Link to="/profile">{currentUser?.user?.name}</Link>
                  </li>
                  <li className="relative w-6 h-6 rounded-full    ">
                    <img
                      src={Images.userAvatar}
                      className="responsive"
                      alt={currentUser?.user?.name}
                    />
                    <button onClick={() => setOpenDropdwon(!openDropdwon)}>
                      <Icons.IoIosArrowDown className=" cursor-pointer absolute top-0 right-[-16px]" />
                    </button>

                    <ul
                      className={`dropdown w-[144px] ${
                        openDropdwon ? "flex" : "hidden"
                      } absolute top-[47px] right-[-23px] flex-col   text-gray-500 text-xs bg-white shadow-lg rounded-md `}
                    >
                      <li className="border-b rounded-md border-gray-200 p-2 hover:bg-gray-100">
                        <Link to="/profile" className="w-full flex">
                          Profile
                        </Link>
                      </li>
                      <li className=" rounded-md p-2 hover:bg-gray-100">
                        <Link to="/dashboard" className="w-full flex">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="ml-4">
                    <Button onClick={handleLogOut} className="text-xs">
                      Logout
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="signin">Login</Link>
                  </li>
                  <li>
                    <Link
                      to="signup"
                      className="bg-primary block w-[120px] text-center rounded-xl text-white p-2"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {/* Mobile menu */}
            <nav
              className={`${
                open ? "right-0 " : "right-[-350px]"
              } navigation xl:hidden fixed top-0 w-[310px] p-4 h-screen back z-50 ${
                theme === "dark" ? "bg-[#111826]/80 " : "bg-white/10"
              } backdrop-blur-sm transition-all duration-500 ease-in-out`}
            >
              <div className="flex items-center justify-between mb-16">
                <Link to="/" className="text-[34px] font-bold flex items-center gap-2">
                  <span className="text-primary">Survey</span>Land
                </Link>
                <button
                  className="text-xl cursor-pointer hover:bg-[#e9e9e7] p-2 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <Icons.LiaTimesSolid />
                </button>
              </div>
              <ul className="">
                <li className="py-4 border-y hover:text-primary">
                  <Link to="/">Home</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/about">About</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/faqs">FAQs</Link>
                </li>

                <ul className="flex mt-16 items-center gap-4">
                  <li>
                    <Link to="signin">Login</Link>
                  </li>
                  <li>
                    <Link to="signup" className="bg-primary w-[120px] rounded-xl text-white p-2">
                      Sign Up
                    </Link>
                  </li>
                  <DarkModeToggle />
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
