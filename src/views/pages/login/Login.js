import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    // console.log('formval' , values);
    if(values.username === 'mahfooz@gmail.com' && values.password === 'Admin@123'){
      // console.log(values);
      navigate('/dashboard')
    }else if(values.username === 'mahfooz@gmail.com' && values.password !== 'Admin@123'){
      alert('Password is incorrect')
    }else if(values.username !== 'mahfooz@gmail.com' && values.password !== 'Admin@123'){
      alert('Username is incorrect')
    }else {
      alert('Either username or password is incorrect')
    }
    setSubmitting(false);

  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="row w-05">
              <div className="col-lg-12">
                <Field
                  name="username"
                  as={TextField}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-lg-12 mt-2">
                <Field
                  name="password"
                  as={TextField}
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-lg-12 mt-2">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
