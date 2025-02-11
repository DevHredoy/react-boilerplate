import React from "react";

const PageWrapper = ({ title, isAddButton }) => {
  return (
    <div>
      <div
        style={{
          width: "81vw",
          height: "4vh",
          backgroundColor: "floralwhite",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "12px",
          borderRadius:"5px"
        }}
      >
        <div
          style={{
            fontSize: "21px",
            fontWeight: "50",
            fontFamily: "'Poppins', sans-serif",
            color: "#333",
            marginLeft:"30px",
            marginTop:"2px"
          }}
        >
          {title}
        </div>
        {isAddButton && (
          <button style={{ backgroundColor: "lightblue", cursor: "pointer" ,borderRadius:"5px"}}>
            add new{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageWrapper;
