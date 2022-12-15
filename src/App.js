import React from "react";
import { Route, Routes, NavLink,  } from "react-router-dom";
import Home from "./pages/Home";
import ClassicFormik from "./pages/ClassicFormik";
import FormValidations from "./pages/FormValidations";
import SignUp from "./components/SignUp";  
import LogIn from "./components/LogIn";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="flex justify-center items-center mt-4 w-full">
      <div>
        <nav className="flex justify-center items-center bg-red-100 rounded-md mb-2">
          <NavLink
            to="/"
            className="mx-3 text-lg font-bold text-blue-500 hover:text-green-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/ClassicFormik"
            className="mx-3 text-lg font-bold text-blue-500 hover:text-green-500"
          >
            Classic Formik
          </NavLink>
          <NavLink
            to="/FormValidations"
            className="mx-3 text-lg font-bold text-blue-500 hover:text-green-500"
          >
            Form Validations
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ClassicFormik" element={<ClassicFormik />} />
          <Route path="FormValidations" element={<FormValidations />} >
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="LogIn" element={<LogIn/>}/>
            <Route path="UserPage" element={<UserPage/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
