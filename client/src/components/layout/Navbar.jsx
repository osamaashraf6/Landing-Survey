import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as Icons from "../../assets/icons/Icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className=" sticky top-0 z-30 bg-white shadow-md py-1.5 w-full">
        <div className="container">
          <div className="parnav flex justify-between items-center py-2">
            <div className="brand xl:w-[35%] w-full flex items-center justify-between">
              <Link
                to="/"
                className="text-xl font-bold flex items-center gap-2"
              >
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
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/faqs">FAQs</NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-primary transition delay-150 ease-in-out" to="/pricing">Pricing</NavLink>
                </li>
              </ul>
            </nav>
            <ul className="xl:flex hidden items-center gap-4">
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
            </ul>
            {/* Mobile menu */}
            <nav
              className={`${
                open ? "right-0 " : "right-[-350px]"
              } navigation xl:hidden fixed top-0 w-[310px] p-4 h-screen back z-50 bg-white/30 backdrop-blur-sm transition-all duration-500 ease-in-out`}
            >
              <div className="flex items-center justify-between mb-16">
                <Link
                  to="/"
                  className="text-[34px] font-bold flex items-center gap-2"
                >
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
                  <Link to="">Home</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/about">About</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="">Features</Link>
                </li>
                <ul className="flex mt-16 items-center gap-4">
                  <li>
                    <Link to="signin">Login</Link>
                  </li>
                  <li>
                    <Link
                      to="signup"
                      className="bg-primary w-[120px] rounded-xl text-white p-2"
                    >
                      Sign Up
                    </Link>
                  </li>
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
