import React from "react";
import PageWrapper from "../PageWrapper";

const TeacherList = () => {
  return (
    <div>
      <PageWrapper
        title={"Teachers"}
        isAddButton={true}
        route={"teacherForm"}
      />
    </div>
  );
};

export default TeacherList;
