import React from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { About } from "./About";
import { App } from "../../App";

import { AppRouter } from "../../routes/AppRouter";
export const AppRoutes = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="app" element={<App />} />
        <Route path="/" element={<AppRouter />} />
      </Routes>
    </>
  );
};
