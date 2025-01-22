import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Dashboard/HomePage";
import LoginPage from "./components/profile/LoginPage";
import RegistrationPage from "./components/profile/RegistrationPage";
import Students from "./components/students/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/success" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export default App;
