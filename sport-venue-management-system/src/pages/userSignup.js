import React from "react";
import Layout from "../components/layout/Layout";
import SignUp from "../components/Forms/Auth/SignUp";
import Alert from "react-bootstrap/Alert";
import "./styles/Auth.css";

function UserSignup() {
  return (
    <Layout>
      <Alert variant={"primary"} className="heading">
        Create your account here!!
      </Alert>
      <SignUp />
    </Layout>
  );
}

export default UserSignup;
