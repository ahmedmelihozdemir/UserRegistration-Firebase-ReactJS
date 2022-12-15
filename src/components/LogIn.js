import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { fb } from "../firebase/config";
import { loginSchema } from "./UserSchema";

function LogIn(props) {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useOutletContext();

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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    /* onSubmit: (values) => {
      console.log("Form values:", values);
      if (
        users.some(
          (user) =>
            user.email === values.email && user.password === values.password
        )
      ) {
        alert("You are logged in!");
        setIsLogin(true);
        console.log("isLogin:", isLogin);
      } else {
        alert("Wrong email or password!");
      }
    }, */
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      users.some(
        (user) =>
          user.email === formik.values.email &&
          user.password === formik.values.password
      )
    ) {
      alert("You are logged in!");
      setIsLogin(true);
      console.log("isLogin:", isLogin);
      formik.resetForm();
    } else {
      alert("Wrong email or password!");
      formik.resetForm();
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-lg font-bold text-orange-700 mb-6">Log In</h1>
        <h3 className="font-semibold text-red-300">Users</h3>
        {/* <div className="flex flex-row">
          {users.map((user, idx) => (
            <div key={idx}>
              <p className="mx-2">
                {user.firstName} {user.lastName},
              </p>
            </div>
          ))}
        </div> */}
        <div>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            <div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-800 mb-4">{formik.errors.email}</div>
              )}
            </div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            <div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-800 mb-4">{formik.errors.email}</div>
              )}
            </div>

            <button
              className="p-2 mt-6 bg-blue-500 hover:bg-blue-600 rounded-md"
              /* type="submit" */
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
