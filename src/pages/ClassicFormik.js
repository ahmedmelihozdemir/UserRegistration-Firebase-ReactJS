import React from "react";
import { useFormik } from "formik";

function ClassicFormik() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      hobbies: [],
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      formik.resetForm();
    },
  });
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-lg font-bold text-green-700 mb-6">
        Classic Formik App
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
          />
          <label className="mt-5">Last Name</label>
          <input
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="border border-gray-400 p-1 rounded-md focus:outline-none focus:border-gray-500"
          />

          <div className="">
            <label className="mr-2">Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
            />
            <span className="h-px mx-3"></span>
            <label className="mx-2">Famale</label>
            <input
              type="radio"
              name="gender"
              value="famale"
              onChange={formik.handleChange}
            />
          </div>

          <div className="">
            <select
              name="country"
              className="border"
              onChange={formik.handleChange}
            >
              <option value="">Select One</option>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
            </select>
          </div>

          <div className="">
            <label className="mr-2">Football</label>
            <input
              type="checkbox"
              name="hobbies"
              value="football"
              onChange={formik.handleChange}
            />
            <label className="mx-2">Basketball</label>
            <input
              type="checkbox"
              name="hobbies"
              value="baskeball"
              onChange={formik.handleChange}
            />
            <label className="mx-2">Volleyball</label>
            <input
              type="checkbox"
              name="hobbies"
              value="voleyball"
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit" className="bg-blue-500 p-1 rounded-md my-5">
            Submit
          </button>
        </form>
        <div>
          <h1 className="font-semibold text-green-500">Form Values</h1>
          <div>
            <p>First Name: {formik.values.firstName}</p>
            <p>Last Name: {formik.values.lastName}</p>
            <p>Gender: {formik.values.gender} </p>
            <p>Country:{formik.values.country} </p>
            <p>Hobbies: {formik.values.hobbies} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassicFormik;
