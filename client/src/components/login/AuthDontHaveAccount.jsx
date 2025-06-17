import React from "react";
import { Link } from "react-router-dom";

export default function AuthDontHaveAccount() {
  return (
    <>
      <span className="text-sm font-normal pr-1">Don't have account? </span>
      <Link to="/signup" className="text-sm text-primary font-medium">
        Apply Now
      </Link>
    </>
  );
}
