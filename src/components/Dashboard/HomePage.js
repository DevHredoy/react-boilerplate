import React from "react";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          width: "100%",
          height: "14vh",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>React Boilerplate</h1>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default HomePage;
