import React from "react";
import TailoredTable from "../commonComponents/TailoredTable";
import PageWrapper from "../PageWrapper";

const Students = () => {
  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "phoneNumber",
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
  ];


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <PageWrapper
        title={"Students"}
        isAddButton={true}
        route={"studentForm"}
      />
      <TailoredTable url="/api/v1/employee/list" columns={columns} />
    </div>
  );
};

export default Students;
