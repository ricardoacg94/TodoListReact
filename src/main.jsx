import ReactDOM from "react-dom/client";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./MainApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);
