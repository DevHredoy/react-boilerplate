import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "250px", // Fixed width for the sidebar
        height: "100vh", // Full height of the viewport
        backgroundColor: "#d3d3d3", // Light grey background
        display: "flex",
        flexDirection: "column", // Stack items vertically
        padding: "10px", // Inner padding for the sidebar
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for a clean effect
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
