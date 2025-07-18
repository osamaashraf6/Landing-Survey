import React from 'react'
import { Link } from "react-router-dom";

const ForgetHeader = () => {
  return (
    <>
        <header className=" shadow-sm h-[72px] border-b border-b-gray-200">
              <div className="container h-full">
                <div className="items flex justify-between items-center h-full">
                  <div className="brand text-2xl font-bold">
                    <Link to="/">
                      <span className="text-primary">Survey</span>Land
                    </Link>
                  </div>
                  <div className="text-sm flex items-center gap-6">
                    <Link to="/signin" className="font-semibold">
                      Login
                    </Link>
                    <Link to="/signup" className="p-2 rounded-md text-white px-6 bg-primary">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </header>
    </>
  )
}

export default ForgetHeader
