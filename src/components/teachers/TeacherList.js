import React from "react";
import PageWrapper from "../PageWrapper";
import TailoredTable from "../commonComponents/TailoredTable";

const TeacherList = () => {
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
      key: "posting location",
      title: "Posting Location",
      dataIndex: "workshopName",
    },
  ];
  console.log("columns from teacher:", columns);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <PageWrapper
        title={"Teachers"}
        isAddButton={true}
        route={"teacherForm"}
      />
      <TailoredTable columns={columns} url="/api/v1/technician/list" />
    </div>
  );
};

export default TeacherList;
