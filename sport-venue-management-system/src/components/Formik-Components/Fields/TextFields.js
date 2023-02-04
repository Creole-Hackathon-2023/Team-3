import React from "react";
import { useField, ErrorMessage } from "formik";
import { Alert, Form } from "react-bootstrap";
const TextField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <Form.Control autoComplete="off" {...field} {...props} />
      <div className="mt-1 mb-1">
        <ErrorMessage
          name={field.name}
          component="div"
          className="text-danger bg-light rounded p-1"
        />
      </div>
    </>
  );
};

export default TextField;
