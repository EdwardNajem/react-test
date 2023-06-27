import { Form, Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function RegistrationForm() {
  const navigate = useNavigate();
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' },
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeofContact: '',
    phone: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    modeofContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeofContact', {
      is: 'telephonemoc',
      then: () => Yup.string().required('Required'),
    }),
  });

  const onSubmit = (values) => {
    console.log('Form Data: ', values);
    navigate('/');
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="App">
              <Form>
                <h1 className="form-h1">Sign Up</h1>
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
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                />
                <FormikControl
                  control="radio"
                  name="modeofContact"
                  label="Mode of Contact"
                  options={options}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone"
                  name="phone"
                />
                <button className="submit-btn" type="submit" disabled={!formik.isValid}>
                  Submit
                </button>
                <div className="create-account">
                  <p className="create-h2">Already Have An Account?</p>
                  <NavLink to="/login">Sign In</NavLink>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default RegistrationForm;
