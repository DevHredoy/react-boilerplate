import React, { useEffect, useState } from "react";
import apiService from "../../apiService/apiService";
import PageWrapper from "../PageWrapper";

const Building = () => {
  const [building, setBuilding] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const ll = localStorage.getItem("tokken");
  console.log("ll:", ll);

  useEffect(() => {
    const url = "/api/v1/workshop/list";
    const fetchAllItems = async () => {
      try {
        const response = await apiService.getAll(url);
        console.log("response to get buildings :", response.data);
        setBuilding(response.data);

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch students.");
        setLoading(false);
      }
    };

    fetchAllItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student List
      </h2> */}
      <PageWrapper
        title={"Buildings"}
        isAddButton={true}
        route={"buildingForm"}
      />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tableHeaderCellStyle}>ID</th>
            <th style={tableHeaderCellStyle}>Name</th>
            <th style={tableHeaderCellStyle}>Address</th>
          </tr>
        </thead>
        <tbody>
          {building.map((building) => (
            <tr key={building.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{building.id}</td>
              <td style={tableCellStyle}>{building.name}</td>
              <td style={tableCellStyle}>{building.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tableRowStyle = {
  backgroundColor: "#fff",
  "&:nth-of-type(even)": { backgroundColor: "#f9f9f9" },
};
export default Building;
