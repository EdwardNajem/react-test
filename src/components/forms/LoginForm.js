import { Form, Formik } from 'formik';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function LoginForm() {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Form Data: ', values);
    navigate("/");
  };
  return (
    <>
      <div className="App">
        <div className="login-form">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
         
            {(formik) => {
              return (
                <Form>
                  <NavLink to="/"><FaTimes/></NavLink>

                  <h1 className="form-h1">Sign In</h1>

                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                  />
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                  <div className="create-account">
                    <p className="create-h2">Don't Have An Account?</p>
                    <NavLink to="/register">Create Account</NavLink>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
