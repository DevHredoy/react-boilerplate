import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Dashboard/HomePage";

import Building from "./components/buildings/Building";
import Layoutt from "./components/Layoutt";
import LoginPage from "./components/profile/LoginPage";
import RegistrationPage from "./components/profile/RegistrationPage";
import Students from "./components/students/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layoutt />}>
        <Route path="/students" element={<Students />} />
        <Route path="/success" element={<HomePage />} />
        <Route path="/building" element={<Building />} />
      </Route>
    </Routes>
  );
}

export default App;
