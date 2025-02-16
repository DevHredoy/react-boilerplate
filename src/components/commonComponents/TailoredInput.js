import { Form, Input } from "antd";
import React from "react";

const TailoredInput = ({
  label,
  name,
  defaultValue = "",
  rules = [],
  required = false,
  placeholder,
  errorMessage,
  ...rest
}) => {
  return (
    <Form.Item
      label={label} // <-- Make sure this is correctly used
      className="mb-2"
      name={name}
      initialValue={defaultValue}
      rules={
        rules.length ? rules : [{ required, message: `${label} is required` }]
      }
      validateStatus={errorMessage ? "error" : ""}
    >
      <Input
        placeholder={placeholder || `Enter ${label}`}
        className="h-10"
        {...rest}
      />
    </Form.Item>
  );
};

export default TailoredInput;
