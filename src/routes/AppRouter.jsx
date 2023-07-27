import React from "react";
import { Routes, Route } from "react-router-dom";

import { AppRoutes } from "../components/pages/AppRoutes";
import { Login } from "../components/pages/Login";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </>
  );
};
