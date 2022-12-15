import React from "react";
import { useFormik } from "formik";
import {userSchema} from "./UserSchema";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { fb } from "../firebase/config";

function SignUp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getFirestore(fb);
    const usersCollection = collection(db, "users");
    getDocs(usersCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUsers((users) => [...users, doc.data()]);
      });
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,

    onSubmit: (values) => {
      console.log("Form values:", values);
      const db = getFirestore(fb);
      addDoc(collection(db, "users"), {
        id: Date.now(),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      formik.resetForm();
      console.log("Users:", users);
    },
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-8 ">
        <h1 className="text-lg font-bold text-orange-700 mb-6">Sign Up</h1>
        <div>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <label>First Name</label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="border border-gray-400 p-1  rounded-md focus:outline-none focus:border-gray-500"
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="text-red-800 mb-4">
                {formik.errors.firstName}{" "}
              </div>
            )}

            <label>Last Name</label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="text-red-800 mb-4">{formik.errors.lastName} </div>
            )}

            <label>E-mail</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-800 mb-4">{formik.errors.email} </div>
            )}

            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-800 mb-4">{formik.errors.password}</div>
            )}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div className="text-red-800 mb-4">
                  Confirm password must be same password.
                </div>
              )}
              
            <button
              className="p-2 mt-6 bg-blue-500 hover:bg-blue-600 rounded-md"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
