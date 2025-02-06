import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokken");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("tokken");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div
        className="header"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "grey",
        }}
      >
        <h1 style={{ margin: 0 }}>React Boilerplate</h1>

        <button
          onClick={handleLogout}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <LogOut size={24} />
        </button>
      </div>

      <Sidebar />
    </div>
  );
};

export default HomePage;
