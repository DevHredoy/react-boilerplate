
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("tokken");
  //   navigate("/login");
  // };

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

       
      </div>
    </div>
  );
};

export default HomePage;
