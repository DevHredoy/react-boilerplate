import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Dashboard/HomePage";
import RegistrationPage from "./components/profile/RegistrationPage";
import LoginPage from "./components/profile/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/success" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
