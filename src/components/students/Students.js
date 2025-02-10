import React, { useEffect, useState } from "react";
import apiService from "../../apiService/apiService";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const ll = localStorage.getItem("tokken");
  console.log("ll:",ll)


  useEffect(() => {
    const url = "/api/v1/employee/list";
    const fetchAllItems = async () => {
      try {
        console.log("hello");
        console.log("url:", url);
        const response = await apiService.getAll(url);
        console.log("response to get all employees:", response.data);
        setStudents(response.data);

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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student List
      </h2>
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
            <th style={tableHeaderCellStyle}>Mark</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{student.id}</td>
              <td style={tableCellStyle}>{student.name}</td>
              <td style={tableCellStyle}>{student.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for table
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

export default Students;
