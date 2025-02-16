import React, { useEffect, useState } from "react";
import apiService from "../../apiService/apiService";

const TailoredTable = ({ url, columns }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getAll(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            {columns.map((col) => (
              <th key={col.key} style={tableHeaderCellStyle}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={tableRowStyle}>
              {columns.map((col) => (
                <td key={col.key} style={tableCellStyle}>
                  {item[col.dataIndex]}
                </td>
              ))}
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

export default TailoredTable;
