import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as Icons from "../../assets/icons/Icons";

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
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "../UI/language-selector";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className=" sticky top-0 z-30 bg-[#f9f9fb]   py-1.5 w-full">
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
                    {t('nav.home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/about"
                  >
                    {t('nav.about')}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/faqs"
                  >
                    {t('nav.faqs')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:text-primary transition delay-150 ease-in-out"
                    to="/pricing"
                  >
                    {t('nav.pricing')}
                  </NavLink>
                </li>
              </ul>
              <DarkModeToggle />
            </nav>
            <ul className="xl:flex hidden items-center gap-4">
              <li>
            <LanguageSwitcher />
              </li>
              <li>
                <Link to="signin">{t('nav.login')}</Link>
              </li>
              <li>
                <Link
                  to="signup"
                  className="bg-primary block w-[120px] text-center rounded-xl text-white p-2"
                >
                  {t('nav.signup')}
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
                  <Link to="">{t('nav.home')}</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/about">{t('nav.about')}</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="/contact">{t('nav.contact')}</Link>
                </li>
                <li className="py-4 border-b hover:text-primary">
                  <Link to="">{t('nav.features')}</Link>
                </li>
                <ul className="flex mt-16 items-center gap-4">
                  <li>
                    <Link to="signin">
                    {t('nav.login')}
                    </Link>
                  </li>
                  <li>
                    <Link to="signup" className="bg-primary w-[120px] rounded-xl text-white p-2">
                    {t('nav.signup')}
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
