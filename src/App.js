import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/profile/LoginPage";

import HomePage from "./components/Dashboard/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/success" element={<HomePage />} />
    </Routes>
  );
}

export default App;
