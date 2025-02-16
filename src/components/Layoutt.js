import { LogOut } from "lucide-react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Dashboard/Sidebar";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokken");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "end",
            // alignItems: "right",
            padding: "10px",
            backgroundColor: "grey",
            
          }}
        >
          {/* <h1 style={{ margin: 0 }}>React Boilerplate</h1> */}
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <LogOut size={24} />
          </button>
        </div>
       <div style={{display:"flex"}}>
       <Sidebar />
        {/* <div
          style={{
            padding: "10px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        >
          {" "}
          //it was to apply padding correctly in the component
        </div> */}
        {/* Render the content of child routes */}
        <Outlet />
       </div>
      </div>
    </div>
  );
};

export default Layout;
