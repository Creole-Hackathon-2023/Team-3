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
        <option value="" label="Select a Roll" className="p-1">
          Select a language
        </option>
        {userRolls.map((user) => (
          <option value={user} label={user} key={user}>
            {user}
          </option>
        ))}
        <div className="mt-1 mb-1">
          <ErrorMessage name={field.name} component="div" className="p-2 " />
        </div>
      </Form.Select>
    </>
  );
};

export default SelectField;
