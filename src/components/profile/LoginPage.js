import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
//   const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
          >
            Login to System
          </h2>
          <form onSubmit={""}>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="username"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                onChange={"(e) => setUsername(e.target.value)"}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={""}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            {/* {errorMessage && (
              <p
                style={{ color: "red", textAlign: "center", marginTop: "10px" }}
              >
                {errorMessage}
              </p>
            )} */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
