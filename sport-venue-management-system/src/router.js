import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";

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
      <Route exact path="/*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}

export default Router;
