import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home";
import UserSignup from "./pages/userSignup";
import UserLogin from "./pages/userLogin";
import Error from "./pages/Error";


const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  const auth = { token: user ? true : false };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route exact path="/user" element={<h1>User Secure Page</h1>} />
      </Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<UserSignup />} />
      <Route exact path="/signin" element={<UserLogin />} />
      <Route exact path="/*" element={<Error />} />
    </Routes>
  );
}

export default Router;
