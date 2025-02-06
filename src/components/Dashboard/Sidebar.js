import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "250px", 
        height: "100vh", 
        backgroundColor: "#d3d3d3", 
        display: "flex",
        flexDirection: "column", 
        padding: "10px", 
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <button
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "left",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => navigate("/students")}
      >
        Students
      </button>
      <button
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "5px",
          textAlign: "left",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => alert("Element 2 clicked")}
      >
        Element 2
      </button>
    </div>
  );
};

export default Sidebar;
