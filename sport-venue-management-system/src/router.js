import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home";
import UserSignup from "./pages/userSignup";
import UserLogin from "./pages/userLogin";
import Error from "./pages/Error";

import Dashboard from "./pages/dashboard";
import { getStorageItem } from "./config";

const PrivateRoute = () => {
  const user = getStorageItem("user");
  const auth = { token: user ? true : false };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<UserSignup />} />
      <Route exact path="/signin" element={<UserLogin />} />
      <Route exact path="/*" element={<Error />} />
    </Routes>
  );
}

export default Router;
