import React from "react";
import Layout from "../components/layout/Layout";
import SignIn from "../components/Forms/Auth/SignIn";
import Alert from "react-bootstrap/Alert";
import "./styles/Auth.css";

function UserLogin() {
  return (
    <Layout>
      <Alert variant={"primary"} className="heading">
        Login here!!
      </Alert>
      <SignIn />
    </Layout>
  );
}

export default UserLogin;
