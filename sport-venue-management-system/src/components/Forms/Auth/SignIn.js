import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, Form as FormikForm } from "formik";
import TextField from "../../Formik-Components/Fields/TextFields";
import { getUsers } from "../../../services/Services";
import { setStorageItem } from "../../../config";
import { useNavigate } from "react-router-dom";

import { userLoginSchema } from "../../../Validators/signInValidators";

const SignIn = () => {
  const navigate = useNavigate();
  const signinuser = (values) => {
    getUsers().then((res) => {
      if (res.status === 200) {
        const user = res.data.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        setStorageItem(JSON.stringify(setStorageItem("user", user)));
        navigate("/dashboard");
      }
    });
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
