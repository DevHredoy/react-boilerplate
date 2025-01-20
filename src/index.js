import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export { BASE_URL };
