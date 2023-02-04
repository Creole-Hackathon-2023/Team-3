import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().email("Not a proper email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password length Must be 8 or more")
    .max(16, "Password length Must be 16 or less")
    .required("Password is required"),
});
