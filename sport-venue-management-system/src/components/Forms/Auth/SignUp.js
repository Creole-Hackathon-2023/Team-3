import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm } from "formik";
import TextField from "../../Formik-Components/Fields/TextFields";

import { userSignupSchema } from "../../../Validators/signUpValidatior";
import SelectField from "../../Formik-Components/Fields/SelectField";

const SignUp = () => {
  const signupuser = async (values) => {
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
          initialValues={{
            username: "",
            email: "",
            password: "",
            roll: "user",
          }}
          validationSchema={userSignupSchema}
          onSubmit={(values) => {
            // console.log(values);
            signupuser(values);
          }}
        >
          {(formik) => (
            <FormikForm className="w-50 mt-5">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>

                <TextField
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                />
              </Form.Group>{" "}
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
              <Form.Group>
                <Form.Label>Select Roll</Form.Label>

                <SelectField name="roll" />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button className="ms-3" variant="primary" type="reset">
                  Reset
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

export default SignUp;
