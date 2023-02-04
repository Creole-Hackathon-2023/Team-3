import * as yup from "yup";

export const userSignupSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username length Must be 5 or more")
    .max(15, "Username length Must be 15 or less")
    .required("Username is required"),
  email: yup.string().email("email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password length Must be 8 or more")
    .max(16, "Password length Must be 16 or less")
    .required("Password is required"),
  roll: yup.string().required("Password is required"),
});
