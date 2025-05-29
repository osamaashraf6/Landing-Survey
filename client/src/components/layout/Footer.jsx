import React from "react";
import * as Icons from "../../assets/icons/Icons";
const Footer = () => {

  return (
    <>
      <footer className="py-10 rounded-t-xl">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-primary">Survey</span>Land
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Make smarter decisions with better data.
                <br />
                Create surveys, gather feedback, and grow.
              </p>
            </div>

            <form className="w-full lg:w-[550px] flex">
              <input
                type="email"
                placeholder="Stay informed by entering your email"
                className="flex-1 w-full px-4 py-1.5 border placeholder:text-xs bg-gray-100 border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2  bg-primary text-white rounded-r-md hover:bg-opacity-90"
              >
                Enter
              </button>
            </form>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:text-left text-center justify-items-center ">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Pages</h3>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Templates
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Integrations
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Help Center</h3>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition delay-150 ease-in-out"
              >
                FAQs
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">E-mail us at</h3>
              <a
                href="mailto:Support@example.com"
                className="block text-sm text-gray-800"
              >
                Support@example.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-xl hover:text-primary"
                >
                  <Icons.FaXTwitter />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-xl hover:text-primary"
                >
                  <Icons.FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-6 text-center text-xs text-gray-500">
            ©2025 SurveyLand. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
