import React from "react";
import { AuthDontHaveAccount } from "@/components";
import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="font-bold text-primary text-2xl">Survey</div>
          <div className="font-bold   text-2xl">Land</div>
        </Link>
        <div className="sm:flex hidden items-center">
          <AuthDontHaveAccount />
        </div>
      </div>
    </header>
  );
}
