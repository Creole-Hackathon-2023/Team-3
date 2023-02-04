import { ErrorMessage, useField } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const SelectField = (props) => {
  const [field] = useField(props);

  const userRolls = ["user", "organiser"];

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        className="mt-2 mb-3"
        {...field}
        {...props}
      >
        <option
          value=""
          label="Select a Roll"
          className="p-1"
          placeholder="Select a Roll"
        >
          Select a roll
        </option>
        {userRolls.map((user) => (
          <option value={user} label={user} key={user}>
            {user}
          </option>
        ))}
      </Form.Select>
      <div className="text-danger bg-light rounded p-1 error-text">
        <ErrorMessage name={field.name} component="div" />
      </div>
    </>
  );
};

export default SelectField;
