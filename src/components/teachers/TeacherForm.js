import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import FormPageWrapper from "../FormPageWrapper";

const { Item } = Form;

const TeacherForm = () => {
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
      <FormPageWrapper title={"Teacher Form"} />
      <div
        style={{
          width: "80vw",
          marginRight: "5px",
          padding: "20px",
           border: "1px solid chocolate",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          marginLeft:"5px"
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
              <Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Item>
            </Col>

            <Col span={8}>
              <Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Enter your phone number" />
              </Item>
            </Col>

            <Col span={8}>
              <Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Item>
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

export default TeacherForm;
