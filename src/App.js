import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Dashboard/HomePage";

import Building from "./components/buildings/Building";
import Layoutt from "./components/Layoutt";
import LoginPage from "./components/profile/LoginPage";
import RegistrationPage from "./components/profile/RegistrationPage";
import Students from "./components/students/Students";
import TeacherList from "./components/teachers/TeacherList";
import StudentForm from "./components/students/StudentForm";
import TeacherForm from "./components/teachers/TeacherForm";
import BuildingForm from "./components/buildings/BuildingForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layoutt />}>
        <Route path="/students" element={<Students />} />
        <Route path="/success" element={<HomePage />} />
        <Route path="/building" element={<Building />} />
        <Route path="/teachers" element={<TeacherList />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/buildingForm" element={<BuildingForm />} />
        <Route path="/teacherForm" element={<TeacherForm />} />
      </Route>
    </Routes>
  );
}

export default App;
