import * as yup from "yup";

const userSchema = yup.object({
  firstName: yup.string("").required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match"),
});

const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min().required("Password is required"),
});

export { userSchema, loginSchema };
