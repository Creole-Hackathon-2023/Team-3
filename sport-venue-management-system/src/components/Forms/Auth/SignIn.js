import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm } from "formik";
import TextField from "../../Formik-Components/Fields/TextFields";

import { userLoginSchema } from "../../../Validators/signInValidators";

const SignIn = () => {
  const signinuser = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={userLoginSchema}
          onSubmit={(values) => {
            signinuser(values);
          }}
        >
          {(formik) => (
            <FormikForm className="w-50 mt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <TextField
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </FormikForm>
          )}
        </Formik>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default SignIn;
