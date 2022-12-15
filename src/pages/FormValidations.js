import React from "react";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function FormValidations() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <nav className="flex justify-center items-center bg-indigo-100 rounded-md mb-2">
        <NavLink
          to="/FormValidations/SignUp"
          className="mx-3 text-lg font-bold text-neutral-500 hover:text-orange-500"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/FormValidations/LogIn"
          className="mx-3 text-lg font-bold text-neutral-500 hover:text-orange-500"
        >
          Log In
        </NavLink>
        {isLogin && (
          <NavLink
            to="/FormValidations/UserPage"
            className="mx-3 text-lg font-bold text-neutral-500 hover:text-orange-500"
          >
            User Page
          </NavLink>
        )}
      </nav>
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-lg font-bold text-green-700 mb-6">
          Form Validations
        </h1>
      </div>
      <Outlet context={[isLogin, setIsLogin]} />
    </div>
  );
}

export default FormValidations;
