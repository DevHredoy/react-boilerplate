import { Button, Col, Form, message, Row } from "antd";
import React from "react";
import FormPageWrapper from "../FormPageWrapper";
import TailoredInput from "../commonComponents/TailoredInput";

const { Item } = Form;

const BuildingForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    message.success("Form Submitted Successfully!");
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <FormPageWrapper title={"Building Form"} />
      <div
        style={{
          width: "80vw",
          marginRight: "5px",
          padding: "20px",
          border: "1px solid lightblue",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          marginLeft: "5px",
        }}
      >
        <Form
          style={{ padding: "10px", marginTop: "0px" }}
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
          {/* Single Row for All Fields */}
          <Row gutter={16}>
            <Col span={8}>
              <TailoredInput label="Name" name="name" />
            </Col>

            <Col span={8}>
              <TailoredInput label="Phone Number" name="phoneNumber" />
            </Col>

            <Col span={8}>
              <TailoredInput label="Email" name="email" />
            </Col>
          </Row>

          {/* Buttons Row */}
          <Row justify="end" gutter={16}>
            <Col>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default BuildingForm;
