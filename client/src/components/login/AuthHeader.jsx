import React from "react";
import { AuthDontHaveAccount } from "@/components";

export default function AuthHeader() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-primary text-2xl">Survey</div>
          <div className="font-bold text-black text-2xl">Land</div>
        </div>
        <div className="sm:flex hidden items-center">
          <AuthDontHaveAccount />
        </div>
      </div>
    </header>
  );
}
